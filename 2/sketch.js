// TODO: mouse hover effect

function overlapRect(x, y, w, h, c) {
  let betweenX = mouseX > x && mouseX < x + w;
  let betweenY = mouseY > y && mouseY < y + h;

  push();
  if (betweenX && betweenY) {
    fill(c);
  } else {
    fill(255);
  }
  rect(x, y, w, h);
  pop();
}

function overlapEllipse(x, y, r, c) {
  let distMouse = dist(mouseX, mouseY, x, y);

  push();
  if (distMouse < r) {
    fill(c);
  } else {
    fill(255);
  }
  ellipse(x, y, 2 * r);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  background(20);

  let rx = 100;
  let ry = 50;
  let rw = 400;
  let rh = 200;

  overlapRect(rx, ry, rw, rh, "deeppink");
  overlapRect(400, 50, 100, 100, "forestgreen");

  let cx = 200;
  let cy = 500;
  let cr = 150;

  overlapEllipse(cx, cy, cr, "deeppink");

  // MY WAY OF MAKING RECTANGLE GREEN IF HOVERED OVER
  // if (mouseX >= 100 && mouseX <= 500 && mouseY >= 50 && mouseY <= 250) {
  //   fill(123, 212, 36);
  // } else {
  //   fill(255, 255, 255);
  // }

  // rect(100, 50, 400, 200);

  // fill(255, 255, 255);
  // ellipse(200, 500, 300);
}
