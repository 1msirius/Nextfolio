let params = {
  carrierFreqX: 0.5,
  carrierFreqY: 0.5,
  modulatorFreq: 0.5, // Frequency of the circular modulator
  modulationIndex: 1.0, // Modulation index for circular modulation
  amplitudeModulationIndex: 1.0,
  modulationCenterX: 0.0, // Center x-coordinate of the ripple
  modulationCenterY: 0.0, // Center y-coordinate of the ripple,
  lfoFrequency: 0.1,
  lfoAmplitude: 0.5
};

function setupGUI() {
  let gui = new dat.GUI();
 
  
  // Add GUI controls for FM synthesis parameters
  gui.add(params, 'carrierFreqX', 0.1, 10.0).step(0.1).name('Carrier Freq X');
  gui.add(params, 'carrierFreqY', 0.1, 10.0).step(0.1).name('Carrier Freq Y');
  gui.add(params, 'modulatorFreq', 0.1, 10.0).step(0.1).name('Modulator Freq');
  gui.add(params, 'modulationIndex', 0.0, 5.0).step(0.1).name('Modulation Index');
   gui.add(params, 'amplitudeModulationIndex', 0.0, 5.0).step(0.1).name('Amp Index');
  gui.add(params, 'modulationCenterX', -1.0, 1.0).step(0.01).name('Center X');
  gui.add(params, 'modulationCenterY', -1.0, 1.0).step(0.01).name('Center Y');
  gui.add(params, 'lfoFrequency', 0.0, 10.0, 0.1).step(0.01).name('LFO freq');
  gui.add(params, 'lfoAmplitude', 0.0, 2.0, 1.0).step(0.1).name('LFO amp');
}

function setShaderUniforms() {
  myShader.setUniform('u_resolution', [width, height]);
  myShader.setUniform('u_carrierFreqX', params.carrierFreqX);
  myShader.setUniform('u_carrierFreqY', params.carrierFreqY);
  myShader.setUniform('u_modulatorFreq', params.modulatorFreq);
  myShader.setUniform('u_modulationIndex', params.modulationIndex);
  myShader.setUniform('u_modulationCenter', [params.modulationCenterX, params.modulationCenterY]);
  myShader.setUniform('u_amplitudeModulationIndex', params.amplitudeModulationIndex);
  myShader.setUniform('u_lfoFrequency', params.lfoFrequency);
  myShader.setUniform('u_lfoAmplitude', params.lfoAmplitude);
  myShader.setUniform('u_time', millis() / 1000.0);
}
