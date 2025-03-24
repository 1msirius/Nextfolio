#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_carrierFreqX;
uniform float u_carrierFreqY;
uniform float u_modulatorFreq;
uniform float u_modulationIndex; // Base value for frequency modulation index
uniform float u_amplitudeModulationIndex; // Base value for amplitude modulation index
uniform vec2 u_modulationCenter;
uniform float u_time; // Time variable to drive the LFO
uniform float u_lfoFrequency; // Frequency of the LFO (how fast it oscillates)
uniform float u_lfoAmplitude; // Amplitude of the LFO (how much it modulates parameters)

vec3 mod289(vec3 x) { return x - floor(x / 289.0) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x / 289.0) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0 - sqrt(3.0)) / 6.0
                        0.366025403784439,  // 0.5 * (sqrt(3.0) - 1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(vec3(i.y + vec3(0.0, i1.y, 1.0))) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}



void main() {
  // Normalize coordinates to range [-1, 1]
  vec2 st = gl_FragCoord.xy / u_resolution * 2.0 - 1.0;

  // LFO: A sinusoidal wave oscillating over time
  float lfo = sin(2.0 * 3.14159 * u_lfoFrequency * u_time) * u_lfoAmplitude;
  
  // float lfo = snoise(vec2(u_time * u_lfoFrequency, 0.0)) * u_lfoAmplitude;

  // Modulate parameters using the LFO
  float dynamicModulationIndex = u_modulationIndex + lfo;
  float dynamicAmplitudeModulationIndex = u_amplitudeModulationIndex + lfo;
  
  float newCenterX = u_modulationCenter.x + lfo;
  float newCenterY = u_modulationCenter.y - lfo;
  
  // Carrier: 2D sinusoidal grid
  float carrierX = sin(2.0 * 3.14159 * u_carrierFreqX * st.x);
  float carrierY = sin(2.0 * 3.14159 * u_carrierFreqY * st.y);

  // Modulator: Circular wave emanating from the modulation center
  float distanceToCenter = length(st - vec2(newCenterX, newCenterY));
  float modulator = sin(2.0 * 3.14159 * u_modulatorFreq * distanceToCenter);
  // float modulator = snoise(vec2(u_time * u_modulatorFreq * distanceToCenter));

  // Apply frequency modulation to the carrier with LFO-modulated index
  float modulatedCarrierX = sin(2.0 * 3.14159 * u_carrierFreqX * st.x + dynamicModulationIndex * modulator);
  float modulatedCarrierY = sin(2.0 * 3.14159 * u_carrierFreqY * st.y + dynamicModulationIndex * modulator);

  // Apply amplitude modulation to the frequency-modulated carrier with LFO-modulated index
  float amplitudeModulatedCarrierX = modulatedCarrierX * (1.0 + dynamicAmplitudeModulationIndex * modulator);
  float amplitudeModulatedCarrierY = modulatedCarrierY * (1.0 + dynamicAmplitudeModulationIndex * modulator);

  // Combine the modulated carriers
  float combinedCarrier = amplitudeModulatedCarrierX + amplitudeModulatedCarrierY;

  // Normalize combinedCarrier to [0.0, 1.0] for color output
  combinedCarrier = (combinedCarrier * 0.5) + 0.5;

  // Output as grayscale
  gl_FragColor = vec4(vec3(combinedCarrier), 1.0);
}

