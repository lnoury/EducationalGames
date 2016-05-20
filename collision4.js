var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	//game.load.spritesheet('gameboy', 'assets/images/gameboy_seize_color_40x60.png', 40, 60);
	game.load.image('atari', 'assets/images/atari130xe.png');
	game.load.image('player','assets/images/phaser-dude.png');

}

var sprite;
var player;

function create() {

    game.stage.backgroundColor = '#124184';
	game.physics.startSystem(Phaser.Physics.ARCADE); 

	sprite = game.add.sprite(300, 200, 'atari');
	sprite.name = 'atari';
	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	sprite.body.collideWorldBounds = true;
	//sprite.body.checkCollision.up = false;
	//sprite.body.checkCollision.down = false;
	sprite.body.immovable = true;

	player = game.add.sprite(0, 210, 'player');
	game.physics.enable(player, Phaser.Physics.ARCADE);
	player.name = 'player';
	player.body.collideWorldBounds = true;
	player.body.bounce.setTo(1, 1);

}


function update() {


	if (game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(player, 200);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(player.body, game.input.x, game.input.y))
        {
            player.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        player.body.velocity.setTo(0, 0);
    }
	
	
	game.physics.arcade.collide(sprite, player, collisionHandler);

	
}

function collisionHandler (obj1, obj2) {

    game.stage.backgroundColor = '#992d2d';

}

function render() {

	game.debug.bodyInfo(sprite, 16, 24);

	// game.debug.body(sprite);
	// game.debug.body(sprite2);

}