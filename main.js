noseX = 0;
noseY = 0;

function preload(){
l_image = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Initialized!!");
}

function draw(){
image(video, 0, 0, 400, 400);
image(l_image, noseX, noseY, 30,30);
}

function take_snapshot(){
    save('myfilterimage.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y +7;
        console.log("noseX = "+ noseX);
        console.log("noseY = "+ noseY);
    }
}