img = "";
status = "";
objects = [];

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status4").innerHTML = "status : detecting object";
}

function preload(){
    img = loadImage('tt.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status4").innerHTML = "status : object detected";
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelloaded() {
    console.log("model loaded!");
    status = true;
    objectdetector.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}