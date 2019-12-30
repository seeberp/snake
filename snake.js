var body;

var playerPosition = [2, 2]; //map 1 starting position



var allMoves = [];
var foodX = [];
var foodY = [];


var arrTest = [];
var coA;
var coB;

var lastPosition = [];

var forDelete;
var delA;
var delB;

var counter = 0;
let foodEaten;
var currentMove = 0;
var lastMove = 0;
var mapTotalLength = 0;
var timer;

let hardWalls = false;
let gameOn = true;
var bool = false;


const bite = new Audio('bite.mp3');


let speed = 200;

let smallBut = true;
let mediumBut = false;
let largeBut = false;
let largoBut = true;
let moderatoBut = false;
let allegroBut = false;

let mapVal = 0;
let globalMap = [
    []
];

buttonColor();

function gameBegin() {

	gameOn = true;
	foodEaten = 1;
	chooseMap();
	loadMap();
	spawnFood();
	allowMovement();
	currentMove = 39;
	lastMove = 39;
	timer = setInterval(right, speed);
}

function buttonColor() {


	if (smallBut == true) {
		document.getElementById('small').style.backgroundColor = 'green';
	} else if (smallBut == false) {
		document.getElementById('small').style.backgroundColor = 'black';
	}
	if (mediumBut == true) {
		document.getElementById('medium').style.backgroundColor = 'green';
	} else if (mediumBut == false) {
		document.getElementById('medium').style.backgroundColor = 'black';
	}
	if (largeBut == true) {
		document.getElementById('large').style.backgroundColor = 'green';
	} else if (largeBut == false) {
		document.getElementById('large').style.backgroundColor = 'black';
	}


	if (largoBut == true) {
		document.getElementById('largo').style.backgroundColor = 'green';
	} else if (largoBut == false) {
		document.getElementById('largo').style.backgroundColor = 'black';
	}
	if (moderatoBut == true) {
		document.getElementById('moderato').style.backgroundColor = 'green';
	} else if (moderatoBut == false) {
		document.getElementById('moderato').style.backgroundColor = 'black';
	}
	if (allegroBut == true) {
		document.getElementById('allegro').style.backgroundColor = 'green';
	} else if (allegroBut == false) {
		document.getElementById('allegro').style.backgroundColor = 'black';
	}

}

function chooseMap() {
	
	//console.log ('chooseMap');

	if (hardWalls == true) {
		if (mapVal == 0) {
			globalMap = [['pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi']]
		} else if (mapVal == 1) {
			globalMap = [['pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi'],
	['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi']]
		} else if (mapVal == 2) {
			globalMap = [['pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi'],
	['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
	['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'pi'],
    ['pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi', 'pi']]
		}
	} else if (hardWalls == false) {
		{
			if (mapVal == 0) {
				globalMap = [
    ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
    ['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    ['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    ['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    ['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    ['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']
];
			} else if (mapVal == 1) {
				globalMap = [
		['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
		['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']
		];

			} else if (mapVal == 2) {
				globalMap = [
		['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
		['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
		['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'r'],
    	['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']
		];
			}
		}
	}
}

function loadMap() {
	//console.log("Load");

	$(document.body).empty();
}

function initialise() {
	
	//console.log('init');

		lastPosition = [playerPosition[0], playerPosition[1]];

		body = document.getElementsByTagName('body')[0];

		var board = document.createElement('table');
		$(board).attr("cellpadding", 1);
		for (var i = 0; i < globalMap.length; i++) {
			var rows = document.createElement('tr');
			for (var j = 0; j < globalMap[i].length; j++) {
				var cells = document.createElement('td');
				$(cells).attr("id", `${i}:${j}`);
				var image = document.createElement("img");
				if (globalMap[i][j] == 'pu') {
					$(image).attr('src', 'pu.jpg')
				} else if (globalMap[i][j] == 'pi') {
					$(image).attr('src', 'pi.jpg', )
				} else if (globalMap[i][j] == 't') {
					$(image).attr('src', 't.jpg', )
				} else if (globalMap[i][j] == 'g') {
					$(image).attr('src', 'g.jpg', )
				} else if (globalMap[i][j] == 'b') {
					$(image).attr('src', 'b.jpg', )
				} else if (globalMap[i][j] == 'r') {
					$(image).attr('src', 'r.png', )
				} else if (globalMap[i][j] == 'y') {
					$(image).attr('src', 'y.jpg', )
				}

				if (i == playerPosition[0] && j == playerPosition[1]) {
					$(image).attr('src', 'g.jpg', )
				}

				cells.appendChild(image);
				rows.appendChild(cells);
			}
			board.appendChild(rows);
			body.appendChild(board);
		}

		text();

		if (gameOn == true) {
			checks();
		}

		if (bool === true) {
			console.log("Glitch");
			bool = false;
			spawnFood();
			foodSearch();
		}

	$("img").on("error", function () {
		$(this).hide();
	});
}

function text() {
	//console.log ('text');
	
	
	var moves = document.createElement("SPAN");
	moves.setAttribute("id", "moves");
	var counting = document.createTextNode("Moves Taken = " + foodEaten); // Create a text node
	moves.appendChild(counting);
	document.body.appendChild(moves);

}

function spawnFood() {

	//console.log('spawn');
	if (gameOn == true) {

		for (i = 0; i < globalMap.length; i++) {
			for (j = 0; j < globalMap[i].length; j++) {

				foodX = Math.floor(Math.random() * globalMap.length);
				foodY = Math.floor(Math.random() * globalMap[i].length);

				if (globalMap[foodX][foodY] === 'b' && [foodX] !== playerPosition[0] && [foodY] !== playerPosition[1]) {
					globalMap[foodX][foodY] = 'y';
					loadMap();
					initialise();
					return;
				} else if (globalMap[foodX][foodY] !== 'b') {
					spawnFood();
					return;
				}
			}
		}
	} else {
		return;
	}
}

function enableWalls() {
	if (hardWalls == true) {
		hardWalls = false;
	} else {
		hardWalls = true
	}

	console.log(hardWalls);
}

function foodSearch() {
	//console.log("search");

	counter = 0;

	for (i = 0; i < globalMap.length; i++) {
		for (j = 0; j < globalMap[i].length; j++) {

			mapTotalLength = globalMap.length * globalMap[i].length;

			if (globalMap[i][j] !== 'y') {
				counter++;
			}
			if (counter >= mapTotalLength) {
				bool = true;
			}
		}
	}

}

function allowMovement() {

	$(document).ready(function () {
		$(window).on("keydown", function () {
			makeMove();
			loadMap();
			initialise();
			foodSearch();
		});
	});
}

function makeMove(event) {

	//console.log("makeMove");

	if (currentMove === lastMove) {
		lastMove = window.event.which;
	}

	loadMap();
	playerPosition = [playerPosition[0], playerPosition[1]];

	if (37 === window.event.which && currentMove !== 37 && currentMove !== 39 && lastMove !== 39) {
		clearInterval(timer);
		currentMove = window.event.which;
		timer = setInterval(left, speed);
	} else if (38 === window.event.which && currentMove !== 38 && currentMove !== 40 && lastMove !== 40) {
		clearInterval(timer);
		currentMove = window.event.which;
		timer = setInterval(up, speed);
	} else if (39 === window.event.which && currentMove !== 39 && currentMove !== 37 && lastMove !== 37) {
		clearInterval(timer);
		currentMove = window.event.which;
		timer = setInterval(right, speed);
	} else if (40 === window.event.which && currentMove !== 40 && currentMove !== 38 && lastMove !== 38) {
		clearInterval(timer);
		currentMove = window.event.which;
		timer = setInterval(down, speed);
	}


}

function tail() {

	if (gameOn == true) {
		//console.log("Tail");

		allMoves.push(lastPosition);


		if (allMoves.length >= foodEaten) {
			forDelete = allMoves.splice(0, 1);
			delB = forDelete[0].splice(1, 1);
			delA = forDelete[0];
		}

		for (i = 0; i < foodEaten - 1; i++) {

			arrTest = allMoves[i];

			if (allMoves.length > 0) {
				coA = arrTest[0];
				coB = arrTest[1];
				globalMap[coA][coB] = 't';

				for (j = 0; j < globalMap.length; j++) {
					for (k = 0; k < globalMap[j].length; k++) {
						if (globalMap[j][k] === 't' && globalMap[delA][delB] === globalMap[j][k]) {
							globalMap[delA][delB] = 'b';
						}
					}
				}
			}
		}
	}
}


function checks() {

	if (currentMove === 37 && globalMap[playerPosition[0]][playerPosition[1]] === 'r') {
		for (j = 0; j < globalMap.length; j++) {
			playerPosition = [playerPosition[0], globalMap[j].length - 2]
			loadMap();
			initialise();
		}
	}
	if (currentMove === 38 && globalMap[playerPosition[0]][playerPosition[1]] === 'r') {
		playerPosition = [globalMap.length - 2, playerPosition[1]]
		loadMap();
		initialise();
	}
	if (currentMove === 39 && globalMap[playerPosition[0]][playerPosition[1]] === 'r') {
		playerPosition = [playerPosition[0], 1]
		loadMap();
		initialise();
	}
	if (currentMove === 40 && globalMap[playerPosition[0]][playerPosition[1]] === 'r') {
		playerPosition = [1, playerPosition[1]]
		loadMap();
		initialise();
	}

	if (globalMap[playerPosition[0]][playerPosition[1]] === "pi") {
		gameOverText();
	}
	if (globalMap[playerPosition[0]][playerPosition[1]] === "t") {
		gameOverText();
	}
	if (globalMap[playerPosition[0]][playerPosition[1]] === "y") {
		foodEaten++;
		bite.load();
		bite.play();
		globalMap[playerPosition[0]][playerPosition[1]] = "b";
		spawnFood();
	}
	foodSearch();
}

function left() {
	if (gameOn == true) {
		playerPosition = [playerPosition[0], playerPosition[1]];
		playerPosition[1] = playerPosition[1] - 1;
		counter++;
		tail();
		loadMap();
		initialise();
	}
}

function up() {
	if (gameOn == true) {
		playerPosition = [playerPosition[0], playerPosition[1]];
		playerPosition[0] = playerPosition[0] - 1;
		counter++;
		tail();
		loadMap();
		initialise();
	}
}

function right() {
	if (gameOn == true) {
		playerPosition = [playerPosition[0], playerPosition[1]];
		playerPosition[1] = playerPosition[1] + 1;
		counter++;
		tail();
		loadMap();
		initialise();
	}

}

function down() {
	if (gameOn == true) {
		playerPosition = [playerPosition[0], playerPosition[1]];
		playerPosition[0] = playerPosition[0] + 1;
		counter++;
		tail();
		loadMap();
		initialise();
	}
}

function gameOverText() {

	loadMap();

	clearInterval(timer);

	gameOn = false;

	$(window).off("keydown");

	playerPosition = [2, 2];
	arrTest = [];
	allMoves = [];
	currentMove = 0;
	lastMove = 0;


	var total = document.createElement("H1");
	total.setAttribute("id", "Total Scpre");
	var totalScore = document.createTextNode("Total Score" + foodEaten);
	total.appendChild(totalScore);
	document.body.appendChild(total);

	var restart = document.createElement("BUTTON");
	restart.setAttribute("id", "restart");
	var buttonRestart = document.createTextNode("Restart");
	restart.appendChild(buttonRestart);
	document.body.appendChild(restart);

	var reset = document.createElement("BUTTON");
	reset.setAttribute("id", "reset");
	var buttonReset = document.createTextNode("Reset");
	reset.appendChild(buttonReset);
	document.body.appendChild(reset);

	$("#restart").click(function () {
		allowMovement();
		gameBegin();
	});

	$("#reset").click(function () {
		location.reload();
	});
}
