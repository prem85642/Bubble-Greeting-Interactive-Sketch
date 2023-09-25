let bubbles = [];
let nameInput;
let submitButton;
let greeting = "";

function setup() {
  createCanvas(600, 400);
  
  // Create and style the name input field
  nameInput = createInput();
  nameInput.position(20, height + 20);
  nameInput.attribute('placeholder', 'Enter your name');
  nameInput.style('width', '200px'); // Set input width
  
  // Create and style the submit button
  submitButton = createButton('Submit');
  submitButton.position(nameInput.x + nameInput.width + 10, nameInput.y);
  submitButton.mousePressed(updateGreeting);
  submitButton.style('padding', '5px 10px'); // Add padding to the button
}

function draw() {
  background(0);
  
  // Display the greeting
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(greeting, width / 2, height / 2);
  
  // Create new bubbles occasionally
  if (random(1) < 0.1) {
    bubbles.push(new Bubble(random(width), height));
  }
  
  // Update and display bubbles
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
    
    // Remove bubbles when they go off-screen
    if (bubbles[i].y < 0) {
      bubbles.splice(i, 1);
    }
  }
}

function updateGreeting() {
  const newName = nameInput.value();
  greeting = `Hello, ${newName}!`;
  nameInput.value('');
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(5, 20);
    this.speed = random(1, 4);
    this.color = color(random(255), random(255), random(255), 150);
  }

  update() {
    this.y -= this.speed;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
}