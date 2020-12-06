noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/9Q3wJHhB/nose-ring.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    if (noseX < 100) {
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
    }
    if (noseX < 150 && noseX > 100) {
        fill(255,124,78);
        stroke(255,0,0);
        circle(noseX,noseY,20);
    }
    if (noseX < 200 && noseX > 150) {
        fill(255,67,289);
        stroke(255,0,0);
        circle(noseX,noseY,20);
    }
    if (noseX < 250 && noseX > 200) {
        fill(255,467,93);
        stroke(255,0,0);
        circle(noseX,noseY,20);
    }
}

function take_snapshot(){
    save('MyFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log
    }
}