img = "";
status = "";
objects = [];

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status3").innerHTML = "status : detecting object";
}

function preload(){
    img = loadImage('data:image/jpeg;base64,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');
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status3").innerHTML = "status : object detected";
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