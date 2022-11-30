'use strict';

const lesson1 = `console.log(123)
console.log('jhdfalfjda')
console.log(true)

console.log(3 + 4)
console.log('Hello, ' + 'World!')
console.log(true && false)

let a = 4 > 5
console.log(a)

const PI = 3.1415
console.log(PI * 2)`;

const lesson2 = `console.log(4 > 5 && 'a' < 'c')

let a = 5
if (a > 3 && 5 < 10) {
	console.log("This is correct!")
}

while (i > 0) {
	console.log(i)
	i -= 1
}

for (let j = 0; j < 100; j = j + 1) console.log(j)`;

const lesson3 = `function drawCircle(x, y, radius, color) {
	fill(color)
	noStroke()

	circle(x, y, radius)
}

drawCircle(50, 50, 10, '#FF0000')

function draw() {
	let x = random(50)
	let y = random(50)
	let randomColor = color(random(255), random(255), random(255))

	background(0)

	drawCircle(x, y, 10, randomColor)
}`;

let animations = [];

function startAnimation(index) {
  if (!animations[index]) {
    animations[index] = [];
  }

  animations[index].map(clearTimeout);
  animations[index] = [];

  const text = [lesson1, lesson2, lesson3][index];
  let element = document
    .querySelector('#lesson-' + (index + 1))
    .querySelector('.bg');
  element.textContent = '';

  for (let i = 0; i < text.length; i++) {
    let timeout = setTimeout(() => (element.textContent += text[i]), 100 * i);
    animations[index].push(timeout);
  }
}

let callback = function(entries) {
  for (let e of entries) {
    const index = e.target.id.at(-1) - 1;
    console.log(e);
    if (e.isIntersecting) {
      console.log(index);
      startAnimation(index);
    }
  }
};

let options = {};

let observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('#lesson-1'));
observer.observe(document.querySelector('#lesson-2'));
observer.observe(document.querySelector('#lesson-3'));