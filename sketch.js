function setup() {
	createCanvas(600, 400);
}

function draw() {
	if (keyIsPressed) {
		if (key == "r"){
			background(255, 0, 0);
		}
		if (key == "g"){
			background(0, 255, 0);
		}
		if (key == "b"){
		background(0, 0, 255);
	    } 
	}
	else {
		background(50);
	}
}