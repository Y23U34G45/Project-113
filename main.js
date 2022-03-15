function preload(){

}

function setup() {
    canvas = createCanvas(500 , 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
image(video,100,80,300,250);
stroke(160, 10, 10);
fill(168, 10, 10);

circle(40,40,50);
circle(40,40,50);
circle(40,40,50);
circle(40,40,50);

stroke(160, 10, 10);
fill(168, 10, 10);

rect(63, 27, 375, 25);
rect(63, 147, 375, 25);
rect(27, 63, 25, 275);
rect(448, 63, 25, 275);

}
function take_snapshot(){
    save("frame.jpg")
}