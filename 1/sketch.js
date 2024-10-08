// TODO: use map() to change shape's size

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255, 20, 120);
}

function draw() {
  // background(255, 20, 120);
  let mw = map(mouseX, 0, width, 300, 32);
  // let d = mouseX / width * 270 + 10; REPLACED WITH MAP
  rect(width / 2, height / 2, mw);
}

function mouseClicked() {
  background(random(255));
}
