// TODO: animation across the screen
//       wrap around
//       bounce

//global/state variable?
//let x; // outside of all functions bc if it was in setup it would always be true and if it was in draw it would constsantly update to be true

function setup() {
  createCanvas(windowWidth, windowHeight);
  // x = 0;
}

function draw() {
  background(20);

  // draw stuff
  //modular thingy used to make it reset when it reaches the end
  let xpos = 5 * frameCount;
  ellipse(xpos % width, height / 2, 100);

  //update some parameter
  // x = x + 5;

  // //check if need to reset x
  // if (x > width) {
  //   x = 0;
  // }
}
