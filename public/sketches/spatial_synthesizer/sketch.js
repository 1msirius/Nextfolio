let myShader;

function preload() {
  myShader = loadShader('/sketches/spatial_synthesizer/shader.vert', '/sketches/spatial_synthesizer/fm.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  setupGUI(); 
}

function draw() {
  setShaderUniforms();
  shader(myShader);
  rect(0, 0, width, height);
}


