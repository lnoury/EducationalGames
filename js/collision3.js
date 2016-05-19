var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	//game.load.spritesheet('gameboy', 'assets/images/gameboy_seize_color_40x60.png', 40, 60);
	game.load.image('atari', 'assets/images/atari130xe.png');
	game.load.image('gameboy','assets/images/phaser-dude.png');

}

var sprite;
var sprite2;
var sprite3;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

	game.stage.backgroundColor = '#124184';

	//	In this example the little Gameboy sprite can pass through the top/bottom of the Atari sprite
	//	Because it's set to ignore collisions on its top/bottom faces.

	sprite = game.add.sprite(300, 200, 'atari');
	sprite.name = 'atari';
	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	sprite.body.collideWorldBounds = true;
	sprite.body.checkCollision.up = false;
	sprite.body.checkCollision.down = false;
	sprite.body.immovable = true;

	//sprite2 = game.add.sprite(350, 400, 'gameboy', 2);
	//sprite2.name = 'gameboy';

	//game.physics.enable(sprite2, Phaser.Physics.ARCADE);
	//sprite2.body.collideWorldBounds = true;
	//sprite2.body.bounce.setTo(1, 1);

	//sprite3 = game.add.sprite(0, 210, 'gameboy', 4);
	sprite3 = game.add.sprite(0, 210, 'gameboy');

	game.physics.enable(sprite3, Phaser.Physics.ARCADE);

	sprite3.name = 'gameboy2';
	sprite3.body.collideWorldBounds = true;
	sprite3.body.bounce.setTo(1, 1);

	//sprite2.body.velocity.y = -200;
	//sprite3.body.velocity.x = 200;

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

	game.physics.arcade.collide(sprite, sprite3);

	sprite3.body.velocity.x = 0;

	//game.physics.arcade.collide(sprite, sprite2);

	if (cursors.up.isDown)
    {
        sprite3.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        sprite3.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        sprite3.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        sprite3.body.moveRight(300);

        
    }

	
}

function render() {

	game.debug.bodyInfo(sprite, 16, 24);

	// game.debug.body(sprite);
	// game.debug.body(sprite2);

}