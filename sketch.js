let myShader;
let time = 0.0;
let mic;
let fft;
let lowFreq = 10;
let midFreq = 600;
let low;
let mid;
let high;

function preload() {
  // load each shader file (don't worry, we will come back to these!)
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  getAudioContext().suspend();
  // the canvas has to be created with WEBGL mode
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn();
  fft = new p5.FFT();
  fft.setInput(mic)
  mic.start();
}

function draw() {
  clear();
  fft.analyze();
 
  low = fft.getEnergy("bass")
  mid = fft.getEnergy("mid")*1.2
  high = fft.getEnergy("treble")*1.2
  low = map(low, 0, 255, 0, 1)
  mid = map(mid, 0, 255, 0, 1)
  high = map(high, 0, 255, 0, 1)
  shader(myShader);
  
  myShader.setUniform('time', time)
  myShader.setUniform('mouseX', map(mouseX, 0, width, -1.0, 1.0))
  myShader.setUniform('mouseY', map(mouseY, 0, height, -1.0, 1.0))

  myShader.setUniform('low', low)
  myShader.setUniform('mid', mid)
  myShader.setUniform('high', high)

  translate(0, 0, 0)
  rotateY(millis() * 0.00025)
  rotateX(millis() * 0.0001)
  sphere(200.0, 512, 512);
  
  time += 0.01;
}
function mousePressed() {
  userStartAudio();
}