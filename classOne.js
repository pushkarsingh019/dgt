
function setup(){
    createCanvas(500, 500);
    background(255, 246, 233);
};

// rgb -> 255, 246, 233

function draw() {
    ellipse(50, 50, 80, 80);
    fill(64, 162, 227)
    noStroke()
    // flower
    stroke(64, 162, 227)
    resetMatrix()
    translate(100, 200)
    noStroke()
    for(let i = 0; i  < 10; i++){
        ellipse(0,30,20,80);
        rotate(PI / 5)
    }
};

function drawFlower(){
    console.log("trying to draw...")
    resetMatrix()
    translate(500, 200)
    noStroke()
    for(let i = 0; i  < 10; i++){
        ellipse(0,30,20,80);
        rotate(PI / 5)
    }
}