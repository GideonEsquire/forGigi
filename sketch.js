var star_img;
var stars = [];
var bg;
var sound;
var music;

function preload() {
  star_img = loadImage('assets/star.png');
  bg = loadImage('assets/retirement.png')
  sound = loadSound('assets/sound.wav');
  music = loadSound('assets/bensound-tenderness.mp3');
}

function setup() {
  music.play();
  createCanvas(windowWidth, windowHeight);

  stars[0] = new Star(star_img, width * .33, height * .62, random(0, 100), 40);
  stars[1] = new Star(star_img, width * .63, height * .62, random(0, 100), 40);
}

function draw() {
  image(bg, 0, 0, displayWidth, displayHeight);
  for (i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].jitter();
    stars[i].sin_move();
  }
}

function mousePressed() {
  stars.push(new Star(star_img, mouseX-12, mouseY-12, random(0, 100), random(20, 35)));
  console.log("click");
  sound.play();
}
