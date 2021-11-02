"use strict";

noseX = 0;
noseY = 0;

function capture() {
  save('image.jpeg');
}

function setup() {
  canvas = createCanvas(200, 200);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("modelLoaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 200, 200);
  image(mustache, noseX, noseY, 80, 35);
}

function preload() {
  mustache = loadImage('');
}
//# sourceMappingURL=main.dev.js.map
