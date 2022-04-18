 song = "";

 function preload()
 {
   song = loadSound("music.mp3");
 }

 scoreRightWrist = 0;
 scoreLeftWrist = 0;

 rightWristX = 0;
 rightWristY = 0;

 leftWristX = 0;
 leftWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = creatCapture(VIDEO);
    video.hide();

    poseNet = ml5poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
} 

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }
}

function draw() {
    Image(video, 0, 0, 600, 500);
}


 function play()
 {
     song.play();
     song.setVolume(1);
     song.rate(1);
 }