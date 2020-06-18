/**
* @Author Vikram Ramavarapu
*
* MineJS 1.0.0
*/

//disables the right click menu
$(document).bind("contextmenu", function(e) {
    return false;
});

//variables
var xPositions = [200, Math.floor(Math.random() * 1351), Math.floor(Math.random() * 1351), Math.floor(Math.random() * 1351), Math.floor(Math.random() * 1351), Math.floor(Math.random() * 1351), Math.floor(Math.random() * 1351)];
var yPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var creative = false;
var w = 2;
var brk;
var brkl;
var d;
var d2;
var deb;
var test = [1, 2, 3, 4];
var blockSize = 50;
var sWidth = 1350/blockSize;
var sHeight = 600/blockSize;
var stop = sHeight/2;
var world = [];
var scane;
var grass;
var dirt;
var stone;
var leaves;
var wood;
var chc;
var chcl;
var running;
var running2;
var head;
var headL;
var cur;
var coal;
var gold;
var iron;
var diamond;
var rand = Math.floor(Math.random() * 10);
var trees = [];
var left = false;
var x = 1350;
var inc = 0;
var ind = 1;
var ex = 675;
var ey = 50;
var gfalling = true;
var jumping = false;
var land;
var ghitl; //ex + 10
var ghitr; //ex + 40
var blocks = [];
var xs = 0;
var ore = Math.floor(Math.random() * 20);
var gore = Math.floor(Math.random() * 50);
var iore = Math.floor(Math.random() * 30);
var dore = Math.floor(Math.random() * 90);
var wch = Math.floor(Math.random() * 15);
var logged = false;
var planks;
var cobblestone;
var dblock;
var cblock;
var gblock;
var iblock;
var sand;
var gravel;
var cactus;
var snowgrass;
var snow;
var ice;
var sorg = Math.floor(Math.random() * 3);

var biomes = ["forest", "desert", "tundra"];
var biome = biomes[Math.floor(Math.random() * 3)];

var swood = false;
var sstone = false;
var sleaves = false;
var sdirt = false;
var sdiamond = false;
var scoal = false;
var sgold = false;
var siron = false;
var sscane = false;
var ssand = false;
var sgravel = false;
var scactus = false;
var ssnow = false;
var sice = false;

//list of items in your inventory
var inventory = {
	wood: 0,//1
	stone: 0,//2
	leaves: 0,//3
	dirt: 0,//4
	diamond: 0,//5
	coal: 0,//6
	gold: 0,//7
	iron: 0,//8
	sugarcane: 0,//9
	sand: 0,//0
	gravel: 0,//-
	cactus: 0,//=
	snow: 0,//`
	ice: 0//backspace
};

var ilog = {
	wood: 0,//1
	stone: 0,//2
	leaves: 0,//3
	dirt: 0,//4
	diamond: 0,//5
	coal: 0,//6
	gold: 0,//7
	iron: 0,//8
	sugarcane: 0,//9
	sand: 0,//0
	gravel: 0,//-
	cactus: 0,//=
	snow: 0,//`
	ice: 0//backspace
};

//sets up an empty 2d array for world (renders the world)
for (var i = 0; i < sHeight; i++) {
	world.push([]);
}
for (var i = 0; i < sHeight; i++) {
	for (var j = 0; j < sWidth * 4; j++) {
		world[i].push(0);
	}
}

//puts values into the array (generating the world)
var drt = Math.floor(Math.random() * 4) + 1;
for (var j = 0; j < world[0].length; j++) {
	for (var i = 0; i < world.length; i++) {
		if (i === stop) {
			if (wch === 1 && world[i][j - 1] !== 0) {
				world[i][j] = 10;
			} else {
				if (biome === "forest") {
					world[i][j] = 1;
				} else if (biome === "tundra") {
					world[i][j] = Math.floor(Math.random() * 2) + 21;
				} else {
					world[i][j] = 18;
				}
			}
		}
		if (i > stop + drt) {
			world[i][j] = 2;

			if (ore === 1) {
				world[i][j] = 6;
			}

			if (gore === 1) {
				world[i][j] = 7;
			}

			if (iore === 1) {
				world[i][j] = 8;
			}

			if (dore === 1) {
				world[i][j] = 9;
			}
		}
		if (i > stop && i <= stop + drt) {
			if (wch === 1 && world[i][j - 1] !== 0 && world[i - 1][j] !== 1 && world[i - 1][j] !== 3) {
				world[i][j] = 10;
			} else {
				if (biome === "tundra" || biome === "forest") {
					world[i][j] = Math.floor(Math.random() * 2) + 2;
				} else {
					if (sorg === 0) {
						world[i][j] = 19;
					} else if (sorg === 1) {
						world[i][j] = 2;
					} else {
						world[i][j] = 3;
					}
				}
			}
		}

		if (wch === 1) {
			wch = Math.floor(Math.random() * 3);
		} else {
			wch = Math.floor(Math.random() * 10);
		}

		ore = Math.floor(Math.random() * 20);
		gore = Math.floor(Math.random() * 50);
		iore = Math.floor(Math.random() * 30);
		dore = Math.floor(Math.random() * 90);
		sorg = Math.floor(Math.random() * 3);
	}

	if (wch !== 1) {
		stop = Math.floor(Math.random() * 4 + 4);
	}
	drt = Math.floor(Math.random() * 4);
}

for (var j = 0; j < world[0].length; j++) {
	for (var i = 0; i < world.length; i++) {
		if (world[i][j] === 20 || world[i][j] === 4) {
			if (i > 0) {
				if (world[i - 1][j] === 11) {
					world[i][j] = 11;
				}
			}
		}

		if (i > 0) { 
			if (world[i][j] === 10 && world[i - 1][j] === 0 && biome === "tundra") {
				world[i][j] = 23;
			}

			if (world[i][j] === 0 && world[i][j - 1] === 23 && world[i + 1][j] === 10 && biome === "tundra") {
				world[i][j] = 23;
			} 
		}
	}
}

//renders trees
for (var i = 0; i < world.length; i++) {
	for (var j = 0; j < world[i].length; j++) {
		if (world[i][j] === 0 && world[i][j - 1] === 10) {
			world[i][j] = 10;
		}
		if (i >= 1) {
			if (world[i][j] === 0 && world[i - 1][j] === 10) {
				world[i][j] = 10;
			}
		}
		if ((world[i][j] === 1 || world[i][j] === 18 || world[i][j] === 21) && (world[i][j - 1] !== 2 || world[i][j + 1] !== 2)) {
			if (rand === 5) {
				trees.push([j * 50, i * 50, Math.floor(Math.random() * 2) + 2, [[0,0,1,0,0],
																				[0,1,1,1,0],
																				[1,1,1,1,1]]]);

				for (var k = i - 1; k > i - trees[trees.length - 1][2] - 1; k--) {
					if (world[k][j - 1] === 10 || world[k][j + 1] === 10) {
						world[k][j] = 11;
					} else if (world[k + 1][j] === 11) {
						world[k][j] = 11;
					} else {
						if (biome === "tundra" || biome === "forest") {
							world[k][j] = 4;
						} else {
							world[k][j] = 20;
						}
					}
				}

				if (biome === "tundra" || biome === "forest") {
					for (var l = i - trees[trees.length - 1][2]; l >= (i - trees[trees.length - 1][2]) - 3; l--) {
						if (world[i - trees[trees.length - 1][2]][j] === 11) {
							break;
						}

						for (var m = j - w; m <= j + w; m++) {
							world[Math.abs(l)][m] = 5;
						}
						w--;
					}
				}

			}
			rand = Math.floor(Math.random() * 10);
			w = 2;
		}
	}
}

//duplicates trees so that full trees dont redraw
var trees2 = trees;

//loads assets
function preload() {
	grass = loadImage("grass.jpg");
	dirt = loadImage("dirt.jpg");
	stone = loadImage("stone.jpg");
	leaves = loadImage("leaves.jpg");
	wood = loadImage("wood.jpg");
	chcl = loadImage("IdleL.png")
	chc = loadImage("Idle.png");
	running = [loadImage("Run1.png"), loadImage("Run2.png")];
	running2 = [loadImage("Run1L.png"), loadImage("Run2L.png")];
	head = loadImage("Head.png");
	headL = loadImage("HeadL.png");
	cur = loadImage("Cursor.png");
	brk = loadImage("break.png");
	brkl = loadImage("breakL.png");
	coal = loadImage("coal.jpg");
	gold = loadImage("gold.png");
	iron = loadImage("iron.png");
	diamond = loadImage("diamond.jpg");
	scane = loadImage("scane.png");
	planks = loadImage("planks.png");
	cobblestone = loadImage("cobblestone.jpg");
	dblock = loadImage("dblock.jpg");
	cblock = loadImage("cblock.png");
	gblock = loadImage("gblock.png");
	iblock = loadImage("iblock.png");
	sand = loadImage("sand.jpg");
	gravel = loadImage("gravel.jpg");
	cactus = loadImage("cactus.png");
	snowgrass = loadImage("snowgrass.png");
	snow = loadImage("snow.jpg");
	ice = loadImage("ice.jpg");
}

//makes a block object to make collisions easier
var block = function(x, y, t) {
	this.x = x;
	this.y = y;
	this.t = t;
	this.falling = true;
	this.hitl = false;
	this.hitr = false;
	this.Size = 50;
	this.dex;
}

//block's make function
block.prototype.make = function() {
	if (this.t === "grass") {
		image(grass, this.x, this.y);
	}
	if (this.t === "dirt") {
		image(dirt, this.x, this.y);
	}
	if (this.t === "stone") {
		image(stone, this.x, this.y);
	}
	if (this.t === "coal") {
		image(coal, this.x, this.y);
	}
	if (this.t === "gold") {
		image(gold, this.x, this.y);
	}
	if (this.t === "iron") {
		image(iron, this.x, this.y);
	}
	if (this.t === "diamond") {
		image(diamond, this.x, this.y);
	}
	if (this.t === "planks") {
		image(planks, this.x, this.y);
	}
	if (this.t === "dblock") {
		image(dblock, this.x, this.y);
	}
	if (this.t === "cblock") {
		image(cblock, this.x, this.y);
	}
	if (this.t === "gblock") {
		image(gblock, this.x, this.y);
	}
	if (this.t === "iblock") {
		image(iblock, this.x, this.y);
	}
	if (this.t === "cobblestone") {
		image(cobblestone, this.x, this.y);
	}
	if (this.t === "sand") {
		image(sand, this.x, this.y);
	}
	if (this.t === "gravel") {
		image(gravel, this.x, this.y);
	}
	if (this.t === "snowgrass") {
		image(snowgrass, this.x, this.y);
	}
	if (this.t === "snow") {
		image(snow, this.x, this.y);
	}
	if (this.t === "ice") {
		image(ice, this.x, this.y);
	}
	if (this.t === "cactus") {
		image(cactus, this.x, this.y);
		return 0;
	}
	if (this.t === "wood") {
		image(wood, this.x, this.y);
		return 0;
	}
	if (this.t === "leaf") {
		image(leaves, this.x, this.y);
		return 0;
	}
	if (this.t === "scane") {
		image(scane, this.x, this.y);
		return 0;
	}
	if (this.t === "water") {
		noStroke();
		fill(0, 0, 255, 120);
		rect(this.x, this.y, 50, 50);
		return 0;
	}

	if (ex + 12 >= this.x - 20 && ex <= this.x + 30 && ey + 75 >= this.y && ey + 75 <= this.y + 50) {
		this.falling = false;
		fill(0, 155, 0);
	} else if (jumping) {
		this.falling = false;
	}

	if ((ex + 10 >= this.x && ex + 10 <= this.x + 50 && this.y + 5 >= ey && this.y + 7 <= ey + 76) || (this.x + 50 > ex && this.x + 50 < ex + 53 && this.y + 50 > ey - 30 && this.y + 50 < ey + 76)) {
		this.hitl = true;
		this.falling = true;
	}

	if ((ex + 40 >= this.x && ex + 40 <= this.x + 50 && this.y + 5 >= ey && this.y + 7 <= ey + 76)  || (this.x > ex && this.x < ex + 53 && this.y + 50 > ey - 30 && this.y + 50 < ey + 76)) {
		this.hitr = true;
		this.falling = true;
	}

	if (ex + 12 >= this.x - 20 && ex <= this.x + 30 && ey >= this.y && ey <= this.y + 50 && jumping) {
		this.falling = true;
		jumping = false;
	}
}

//makes the canvas
function setup() {
	createCanvas(1350, 600);
}

//main game loop
function draw() {
	//keeps the game from moving an an inconsistent rate
	frameRate(45);

	//redraws the same block so the moving can happen
	blocks = [];
	for (var i = 0; i < world.length; i++) {
		for (var j = 0; j < world[i].length; j++) {
			if ((world[i][j] === 5 || world[i][j] === 4 || world[i][j] === 20) && (world[i][j - 1] === 10 || world[i][j + 1] === 10)) {
				world[i][j] = 10;
			}

			if (i >= 1) {
				if ((world[i][j] === 5 || world[i][j] === 4) && world[i - 1][j] === 10) {
					world[i][j] = 10;
				}
			}

			if (world[i][j] === 0 && world[i][j - 1] === 10) {
				world[i][j] = 10;
			}
			if (world[i][j] === 0 && world[i][j + 1] === 10) {
				world[i][j] = 10;
			}
			if ((world[i][j] === 1 || world[i][j] === 21) && world[i - 1][j] === 10) {
				world[i][j] = 3;
			}

			if (world[i][j] === 18 && (world[i + 1][j] === 0 || world[i + 1][j] === 10)) {
				world[i][j] = 0;
				world[i + 1][j] = 18;
			}

			if (world[i][j] === 19 && (world[i + 1][j] === 0 || world[i + 1][j] === 10)) {
				world[i][j] = 0;
				world[i + 1][j] = 19;
			}

			if (i >= 1) {
				if (world[i][j] === 0 && (world[i - 1][j] === 10 || world[i - 1][j] === 11)) {
					world[i][j] = 10;
				}
			}

			if (world[i][j] === 1) {
				blocks.push(new block(j * 50 - x, i * 50, "grass"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 2) {
				blocks.push(new block(j * 50 - x, i * 50, "stone"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 3) {
				blocks.push(new block(j * 50 - x, i * 50, "dirt"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 4) {
				blocks.push(new block(j * 50 - x, i * 50, "wood"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 5) {
				blocks.push(new block(j * 50 - x, i * 50, "leaf"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 6) {
				blocks.push(new block(j * 50 - x, i * 50, "coal"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 7) {
				blocks.push(new block(j * 50 - x, i * 50, "gold"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 8) {
				blocks.push(new block(j * 50 - x, i * 50, "iron"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 9) {
				blocks.push(new block(j * 50 - x, i * 50, "diamond"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 10) {
				blocks.push(new block(j * 50 - x, i * 50, "water"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 11) {
				blocks.push(new block(j * 50 - x, i * 50, "scane"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 12) {
				blocks.push(new block(j * 50 - x, i * 50, "planks"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 13) {
				blocks.push(new block(j * 50 - x, i * 50, "cobblestone"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 14) {
				blocks.push(new block(j * 50 - x, i * 50, "gblock"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 15) {
				blocks.push(new block(j * 50 - x, i * 50, "cblock"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 16) {
				blocks.push(new block(j * 50 - x, i * 50, "dblock"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 17) {
				blocks.push(new block(j * 50 - x, i * 50, "iblock"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 18) {
				blocks.push(new block(j * 50 - x, i * 50, "sand"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 19) {
				blocks.push(new block(j * 50 - x, i * 50, "gravel"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 20) {
				blocks.push(new block(j * 50 - x, i * 50, "cactus"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 21) {
				blocks.push(new block(j * 50 - x, i * 50, "snowgrass"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 22) {
				blocks.push(new block(j * 50 - x, i * 50, "snow"));
				blocks[blocks.length - 1].dex = [i, j];
			}

			if (world[i][j] === 23) {
				blocks.push(new block(j * 50 - x, i * 50, "ice"));
				blocks[blocks.length - 1].dex = [i, j];
			}
		}
	}

	//you move more slowly in water, this is a boolean that tells if you are waterlogged
	for (var i = 0; i < blocks.length; i++) {
		if (blocks[i].t === "water" || blocks[i].t === "scane") {
			if ((ex + 10 >= blocks[i].x && ex + 10 <= blocks[i].x + 50 && ey + 76 >= blocks[i].y && ey + 76 <= blocks[i].y + 50) || (ex + 40 >= blocks[i].x && ex + 40 <= blocks[i].x + 50 && ey + 76 >= blocks[i].y && ey + 76 <= blocks[i].y + 50)) {
				logged = true;
			} else {
				logged = false;
			}
		}
	}

	background(200, 220, 255);
	if (biome === 'forest') {

	}

	//cross cursor
	if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
		cursor(CROSS);
	}

	inc++;
	if (inc % 8 === 0) {
		ind++;
		if (ind > 1) {
			ind = 0;
		}
	}

	//sets up the rendering
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].make();
	}

	//adds gravity to the program
	for (var i = 0; i < blocks.length; i++) {
		if (!blocks[i].falling) {
			gfalling = false;
			break;
		}
		gfalling = true;
	}

	//checks for hitting the left or right of the block (you cant move through blocks)
	for (var i = 0; i < blocks.length; i++) {
		if (blocks[i].hitl) {
			ghitl = true;
			break;
		}
		ghitl = false;
	}

	for (var i = 0; i < blocks.length; i++) {
		if (blocks[i].hitr) {
			ghitr = true;
			break;
		}
		ghitr = false;
	}

	//for Steves view to move according to the mouse position
	if (mouseIsPressed) {
		if (mouseX < ex) {
			translate(ex + 50, ey - 13);
		} else {
			translate(ex + 25, ey - 13);
		}
	} else {
		translate(ex + 25, ey - 13);
	}
	angleMode(DEGREES);
	rotate(atan((mouseY - ey)/(mouseX - ex)));
	imageMode(CENTER);
	if (mouseX > ex) {
		image(head, 0, 0);
	} else {
		image(headL, 0, 0);
	}
	resetMatrix();
	imageMode(CORNER);
	
	//for smoother controls
	x += xs

	//an event handler for left and right
	if (keyIsPressed) {
		if (keyCode === RIGHT_ARROW && !ghitr) {
			if (ex <= 675) {
				left = false;
				image(running[ind], ex, ey);
				xs = 0;
				ex+=5;
			} else {
				if (x < 4050) {
					left = false;
					image(running[ind], ex, ey);
					xs = 5;
				} else {
					if (ex <= 1300) {
						left = false;
						image(running[ind], ex, ey);
						xs = 0;
						ex+=5;
					} else {
						if (left) {
							xs = 0;
							image(chcl, ex, ey);
						} else {
							xs = 0;
							image(chc, ex, ey);
						}
					}
				}
			}
		} else if (keyCode === LEFT_ARROW && !ghitl) {
			if (ex >= 675) {
				left = true;
				image(running2[ind], ex, ey);
				xs = 0;
				ex -= 5;
			} else {
				if (x > 0) {
					left = true;
					image(running2[ind], ex, ey);
					xs = -5;
				} else {
					if (ex >= 0) {
						left = true;
						image(running[ind], ex, ey);
						xs = 0;
						ex-=5;
					} else {
						if (left) {
							xs = 0;
							image(chcl, ex, ey);
						} else {
							xs = 0;
							image(chc, ex, ey);
						}
					}
				}
			}
		} else {
			if (left) {
				if (jumping) {
					xs = 0;
					image(running2[1], ex, ey);
				} else {
					xs = 0;
					image(chcl, ex, ey);
				}
			} else if (!left) {
				if (jumping) {
					xs = 0;
					image(running2[1], ex, ey);
				} else {
					xs = 0;
					image(chcl, ex, ey);
				}
			}
		}
	} else {
		if (mouseIsPressed) {
			if (mouseX < ex) {
				xs = 0;
				image(brkl, ex, ey);
			} else {
				xs = 0;
				image(brk, ex, ey);
			}
		} else {
			if (left) {
				if (jumping) {
					xs = 0;
					image(running2[0], ex, ey);
				} else {
					xs = 0;
					image(chcl, ex, ey);
				}
			} else {
				if (jumping) {
					xs = 0;
					image(running2[0], ex, ey);
				} else {
					xs = 0;
					image(chcl, ex, ey);
				}
			}
		}
	}

	//calls out gravity
	if (gfalling) {
		ey+=10;

		for (var i = 0; i < blocks.length; i++) {
			if (blocks[i].t === "water" || blocks[i].t === "scane") {
				if (ex + 12 >= blocks[i].x - 20 && ex <= blocks[i].x + 30 && ey + 75 >= blocks[i].y && ey + 75 <= blocks[i].y + 50) {
					ey -= 7;
				}
			}
		}
	}

	//jump code
	if (jumping) {
		ey -= 10;

		if (logged) {
			ey += 7;
		}

		if (ey + 76 < land - 150) {
			jumping = false;
		}
	}

	if (swood) {
		image(planks, width - 60, 10, 50, 50);
		fill(255);
		textSize(20);
		textAlign(CENTER);
		text(inventory.wood , width - 40, 40);
	}

	if (sstone) {
		image(cobblestone, width - 60, 10, 50, 50);
		fill(255);
		textSize(20);
		textAlign(CENTER);
		text(inventory.stone, width - 40, 40);
	}

	if (sleaves) {
		image(leaves, width - 60, 10, 50, 50);
		fill(255);
		textSize(20);
		textAlign(CENTER);
		text(inventory.leaves, width - 40, 40);
	}

	if (sdirt) {
		image(dirt, width - 60, 10, 50, 50);
		fill(255);
		textSize(20);
		textAlign(CENTER);
		text(inventory.dirt, width - 40, 40);
	}

	if (sdiamond) {
		image(dblock, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.diamond, width - 40, 40);
	}

	if (scoal) {
		image(cblock, width - 60, 10, 50, 50);
		fill(255);
		textSize(20);
		textAlign(CENTER);
		text(inventory.coal, width - 40, 40);
	}

	if (sgold) {
		image(gblock, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.gold, width - 40, 40);
	}

	if (siron) {
		image(iblock, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.iron, width - 40, 40);
	}

	if (sscane) {
		image(scane, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.sugarcane, width - 40, 40);
	}

	if (ssand) {
		image(sand, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.sand, width - 40, 40);
	}

	if (sgravel) {
		image(gravel, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.gravel, width - 40, 40);
	}

	if (scactus) {
		image(cactus, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.cactus, width - 40, 40);
	}

	if (ssnow) {
		image(snow, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.snow, width - 40, 40);
	}

	if (sice) {
		image(ice, width - 60, 10, 50, 50);
		fill(0);
		textSize(20);
		textAlign(CENTER);
		text(inventory.ice, width - 40, 40);
	}

	if (biome === 'tundra') {
		//draws raindrops
	    for (var i = 0; i < xPositions.length; i++) {
	        strokeWeight(5);
	        stroke(255, 255, 255);
	        point(xPositions[i], yPositions[i]);
	        yPositions[i] += random(1, 25);
	        xPositions[i] -= random(-5, 5);
	        //resets if raindrops touches bottom
	        if (yPositions[i] >= 605) {
	            xPositions.splice(i, 1);
	            yPositions.splice(i, 1);
	        }
	    }
	    
	    //for increasing raindrops
	    xPositions.push(Math.floor(Math.random() * 1351));
	    yPositions.push(0);
	}
}

//up arrow event handler
function keyReleased() {
	if (keyCode === UP_ARROW && (!jumping || logged) && !gfalling) {
		land = ey + 75;
		jumping = true;
	}

	if (key === '1') {
		swood = true;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '2') {
		swood = false;
		sstone = true;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '3') {
		swood = false;
		sstone = false;
		sleaves = true;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '4') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = true;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '5') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = true;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '6') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = true;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '7') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = true;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '8') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = true;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '9') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = true;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '0') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = true;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '-' || key === '½') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = true;
		scactus = false;
		ssnow = false;
		sice = false;
	}

	if (key === '=' || key === '»') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = true;
		ssnow = false;
		sice = false;
	}

	if (key === '`' || key === 'À') {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = true;
		sice = false;
	}

	if (keyCode === BACKSPACE) {
		swood = false;
		sstone = false;
		sleaves = false;
		sdirt = false;
		sdiamond = false;
		scoal = false;
		sgold = false;
		siron = false;
		sscane = false;
		ssand = false;
		sgravel = false;
		scactus = false;
		ssnow = false;
		sice = true;
	}
}

function keyPressed() {
	if (key === 'c' || key === 'C') {
		if (!creative) {
			ilog = inventory;
			creative = true;
			inventory.wood = Infinity;
			inventory.stone = Infinity;
			inventory.leaves = Infinity;
			inventory.dirt = Infinity;
			inventory.diamond = Infinity;
			inventory.coal = Infinity;
			inventory.gold = Infinity;
			inventory.iron = Infinity;
			inventory.sugarcane = Infinity;
			inventory.sand = Infinity;
			inventory.gravel = Infinity;
			inventory.cactus = Infinity;
			inventory.snow = Infinity;
			inventory.ice = Infinity;
		} else {
			inventory.wood = 0;
			inventory.stone = 0;
			inventory.leaves = 0;
			inventory.dirt = 0;
			inventory.diamond = 0;
			inventory.coal = 0;
			inventory.gold = 0;
			inventory.iron = 0;
			inventory.sugarcane = 0;
			inventory.sand = 0;
			inventory.gravel = 0;
			inventory.cactus = 0;
			inventory.snow = 0;
			inventory.ice = 0;
			creative = false;
		}
	}
}

//mouse released event handler
function mousePressed() {
	if (mouseButton === LEFT) {
		for (var i = 0; i < blocks.length; i++) {
			if (mouseX > blocks[i].x && mouseX < blocks[i].x + blocks[i].Size && mouseY > blocks[i].y && mouseY < blocks[i].y + blocks[i].Size &&
				blocks[i].x > ex - 150 && blocks[i].x < ex + 150 && blocks[i].y > ey - 150 && blocks[i].y < ey + 150 &&
				((world[blocks[i].dex[0] - 1][blocks[i].dex[1]] === 0 || world[blocks[i].dex[0]][blocks[i].dex[1] - 1] === 0 || 
					world[blocks[i].dex[0] + 1][blocks[i].dex[1]] === 0 || world[blocks[i].dex[0]][blocks[i].dex[1] + 1] === 0) || (world[blocks[i].dex[0] - 1][blocks[i].dex[1]] === 10 || world[blocks[i].dex[0]][blocks[i].dex[1] - 1] === 10 || 
					world[blocks[i].dex[0] + 1][blocks[i].dex[1]] === 10 || world[blocks[i].dex[0]][blocks[i].dex[1] + 1] === 10))) {

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 1 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 3 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 21) {
					inventory.dirt++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 2 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 13) {
					inventory.stone++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 4 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 12) {
					inventory.wood++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 5) {
					inventory.leaves++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 6 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 15) {
					inventory.coal++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 7 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 14) {
					inventory.gold++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 8 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 17) {
					inventory.iron++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 9 || world[blocks[i].dex[0]][blocks[i].dex[1]] === 16) {
					inventory.diamond++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 11) {
					inventory.sugarcane++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 18) {
					inventory.sand++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 19) {
					inventory.gravel++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 20) {
					inventory.cactus++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 22) {
					inventory.snow++;
				}

				if (world[blocks[i].dex[0]][blocks[i].dex[1]] === 23) {
					inventory.ice++;
				}

				world[blocks[i].dex[0]][blocks[i].dex[1]] = 0;
			}
		}
	}	

	if (mouseButton === RIGHT) {
		for (var i = 0; i < world.length; i++) {
			for (var j = 0; j < world[i].length; j++) {
				if (world[i][j] === 0 || world[i][j] === 10) {
					if (world[i + 1][j] !== 0 || world[i][j - 1] !== 0 || world[i][j + 1] !== 0) {
						if (mouseX > j * 50 - x && mouseX < (j * 50 - x) + 50 && mouseY > i * 50 && mouseY < i * 50 + 50) {
							if (sdirt && inventory.dirt > 0) {
								world[i][j] = 3;
								inventory.dirt--;
							}

							if (sstone && inventory.stone > 0) {
								world[i][j] = 13;
								inventory.stone--;
							}

							if (swood && inventory.wood > 0) {
								world[i][j] = 12;
								inventory.wood--;
							}

							if (sleaves && inventory.leaves > 0) {
								world[i][j] = 5;
								inventory.leaves--;
							}

							if (sdiamond && inventory.diamond > 0) {
								world[i][j] = 16;
								inventory.diamond--;
							}

							if (sgold && inventory.gold > 0) {
								world[i][j] = 14;
								inventory.gold--;
							}

							if (siron && inventory.iron > 0) {
								world[i][j] = 17;
								inventory.iron--;
							}

							if (scoal && inventory.coal > 0) {
								world[i][j] = 15;
								inventory.coal--;
							}

							if (sscane && inventory.sugarcane > 0) {
								world[i][j] = 11;
								inventory.sugarcane--;
							}

							if (ssand && inventory.sand > 0) {
								world[i][j] = 18;
								inventory.sand--;
							}

							if (sgravel && inventory.gravel > 0) {
								world[i][j] = 19;
								inventory.gravel--;
							}

							if (scactus && inventory.cactus > 0) {
								world[i][j] = 20;
								inventory.gravel--;
							}

							if (ssnow && inventory.snow > 0) {
								world[i][j] = 22;
								inventory.snow--;
							}

							if (sice && inventory.ice > 0) {
								world[i][j] = 23;
								inventory.ice--;
							}
						}
					}
					if (i >= 1) {
						if (world[i - 1][j] !== 0) {
							if (mouseX > j * 50 - x && mouseX < (j * 50 - x) + 50 && mouseY > i * 50 && mouseY < i * 50 + 50) {
								if (sdirt && inventory.dirt > 0) {
									world[i][j] = 3;
									inventory.dirt--;
								}

								if (sstone && inventory.stone > 0) {
									world[i][j] = 13;
									inventory.stone--;
								}

								if (swood && inventory.wood > 0) {
									world[i][j] = 12;
									inventory.wood--;
								}

								if (sleaves && inventory.leaves > 0) {
									world[i][j] = 5;
									inventory.leaves--;
								}

								if (sdiamond && inventory.diamond > 0) {
									world[i][j] = 16;
									inventory.diamond--;
								}

								if (sgold && inventory.gold > 0) {
									world[i][j] = 14;
									inventory.gold--;
								}

								if (siron && inventory.iron > 0) {
									world[i][j] = 17;
									inventory.iron--;
								}

								if (scoal && inventory.coal > 0) {
									world[i][j] = 15;
									inventory.coal--;
								}

								if (sscane && inventory.sugarcane > 0) {
									world[i][j] = 11;
									inventory.sugarcane--;
								}

								if (ssand && inventory.sand > 0) {
									world[i][j] = 18;
									inventory.sand--;
								}

								if (sgravel && inventory.gravel > 0) {
									world[i][j] = 19;
									inventory.gravel--;
								}

								if (scactus && inventory.cactus > 0) {
									world[i][j] = 20;
									inventory.gravel--;
								}

								if (ssnow && inventory.snow > 0) {
									world[i][j] = 22;
									inventory.snow--;
								}

								if (sice && inventory.ice > 0) {
									world[i][j] = 23;
									inventory.ice--;
								}
							}
						}
					}
				}
			}
		}
	}
}