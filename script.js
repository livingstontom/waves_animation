const draw = function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBackground();
	ctx.fillStyle = "#ff5050";
	ctx.shadowColor = "#ff5050";
	ctx.shadowBlur = 20;
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = -6;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height / 2);
	for (let i = 0; i < pointsNum; i++) {
		if (ifUp[i]) {
			if (count[i] <= targets[i]) {
				targets[i] = rand(-canvas.height / 2, canvas.height / 2);
				ifUp[i] = targets[i] <= count[i];
			}
			count[i] -= speed;
		} else {
			if (count[i] >= targets[i]) {
				targets[i] = rand(-canvas.height / 2, canvas.height / 2);
				ifUp[i] = targets[i] <= count[i];
			}
			count[i] += speed;
		}
		if (i == 0) {
			ctx.moveTo(0, canvas.height / 2 + count[i]);
		} else {
			ctx.lineTo((i) * canvas.width / (pointsNum - 1), canvas.height / 2 + count[i]);
		}
	}
	ctx.lineTo(canvas.width, canvas.height);
	ctx.lineTo(0, canvas.height);
	ctx.lineTo(0, canvas.height / 2);
	ctx.fill();
	ctx.closePath()
	requestAnimationFrame(draw);
}

const drawSmooth = function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBackground();
	ctx.fillStyle = "#ff5050";
	ctx.shadowColor = "#ff5050";
	ctx.shadowBlur = 20;
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = -6;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height / 2);
	for (let i = 0; i < pointsNum; i++) {
		if (ifUp[i]) {
			if (count[i] <= targets[i]) {
				targets[i] = rand(-canvas.height / 2, canvas.height / 2);
				ifUp[i] = targets[i] <= count[i];
			}
			count[i] -= speed;
		} else {
			if (count[i] >= targets[i]) {
				targets[i] = rand(-canvas.height / 2, canvas.height / 2);
				ifUp[i] = targets[i] <= count[i];
			}
			count[i] += speed;
		}
		if (i == 0) {
			ctx.moveTo(0, canvas.height / 2 + count[i]);
		} else {
			ctx.bezierCurveTo();
			ctx.lineTo((i) * canvas.width / (pointsNum - 1), canvas.height / 2 + count[i]);
		}
	}
	ctx.lineTo(canvas.width, canvas.height);
	ctx.lineTo(0, canvas.height);
	ctx.lineTo(0, canvas.height / 2);
	ctx.fill();
	ctx.closePath()
	requestAnimationFrame(draw);
}
function fillTargets(pointsNum) {
	// Funkcja przyjmuje jako argument ilość punktów na wykresie w osi X wynosi liczbę, przez którą dzielimy szerokość canvasu
	let targets = []; // wartości, do których animacja grafu będzie dążyć
	for (let i = 0; i < pointsNum; i++) {
		let value = rand(-canvas.height / 4, canvas.height / 4);
		targets.push(value);
	}
	return targets;
}
function drawBackground() {
	ctx.fillStyle = "#ffcccc";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

// Tutaj zaczynamy przywoływać funkcje i ogólnie wszystko co ma się wykonać
var canvas = document.getElementById('canvas');
var pointsNum = 8; // ilość punktów na wykresie
var ifUp = [];
var count = [];
var targets = [];
var speed = 2;
for (let i = 0; i < pointsNum; i++) {
	count[i] = 0;
	ifUp[i] = false;
	targets[i] = 0;
}
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	requestAnimationFrame(draw);
}
