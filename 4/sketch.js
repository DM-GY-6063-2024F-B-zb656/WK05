// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  
  //period of our cycle
  let P = 3000;
  let counter = millis() % P;

  //creates a diameter variable for our ellipse that increases over 2000mls
  let md = map(counter, 0,P, 10,500);
  let mg = map(counter, 0, P, 100, 255);

  fill(0, mg, 100);
  ellipse(width / 2, height / 2, md);
  //you could draw a girls face with this as bubblegum popping
  //maybe the circle expands until you click it and then it 'pops'
  //or it pops at the widest point of the screen if u dont click
  //some pink on girls face to show bubblegum
  //omg and you can make it lighter pink over time

  //or you could make a lot of strobing lights lol
}
