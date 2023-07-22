import Phaser from 'phaser'
// https://gamedevacademy.org/phaser-tutorial-how-to-create-an-idle-clicker-game/


export default class GameScene extends Phaser.Scene {
	constructor() {
		super('GameScene')
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	selection:any

	gameState:any = {cursors: {}, player: {}}

	// preload() {	
	// 	this.load.image('map', 'tiles/dungeonworld.png');
	// 	this.load.tilemapTiledJSON('dungeon', 'tiles/dungeon-01.json');
	// }

	/**
 * @param {Phaser.Input.Pointer} pointer
 * @param {Phaser.GameObjects.GameObject[]} currentlyOver
*/
handlePointerDown(pointer:any, currentlyOver:any)
{
	this.selection.x = pointer.x
	this.selection.y = pointer.y
}

/**
 * @param {Phaser.Input.Pointer} pointer
 * @param {Phaser.GameObjects.GameObject[]} currentlyOver
*/
handlePointerMove(pointer:any, currentlyOver:any)
{
	if (!pointer.isDown)
	{
		return
	}

	const dx = pointer.x - pointer.prevPosition.x
	const dy = pointer.y - pointer.prevPosition.y

	this.selection.width += dx
	this.selection.height += dy

	// const selected = this.physics.overlapRect(
	// 	this.selection.x,
	// 	this.selection.y,
	// 	this.selection.width,
	// 	this.selection.height
	// )

	// create a new Rectangle
	const selectionRect = new Phaser.Geom.Rectangle(
		this.selection.x,
		this.selection.y,
		this.selection.width,
		this.selection.height
	)

	// check if width or height is negative
	// and then adjust
	if (selectionRect.width < 0)
	{
		selectionRect.x += selectionRect.width
		selectionRect.width *= -1
	}
	if (selectionRect.height < 0)
	{
		selectionRect.y += selectionRect.height
		selectionRect.height *= -1
	}

	// use the new Rectangle to check for overlap
	const selected = this.physics.overlapRect(
		selectionRect.x,
		selectionRect.y,
		selectionRect.width,
		selectionRect.height
	)
	
	console.log('selected', selected);
	

	// do something with selected

	// do something with selected
}

/**
 * @param {Phaser.Input.Pointer} pointer
 * @param {Phaser.GameObjects.GameObject[]} currentlyOver
*/
handlePointerUp(pointer:any, currentlyOver:any)
{
	this.selection.width = 0
	this.selection.height = 0
}

	create() {
		
		const map = this.make.tilemap({key: 'dungeon'});
		// @params tileset name, image used for created the tileset
		const tileset = map.addTilesetImage('dungeon', 'map');
		// @params the name of the layer itself as we see it in Tiled
		map.createLayer('Calque de Tuiles 1', tileset);

		this.gameState.player = this.add.sprite(90, 100, 'player');
		this.gameState.cursors = this.input.keyboard.createCursorKeys();
		console.log(this.gameState.cursors)
		console.log(this.gameState)
		console.log(this.gameState.player.x);
		
		// this.selection = this.add.rectangle(0, 0, 0, 0, 0x1d7145, 0.5);
		// this.input.on(Phaser.Input.Events.POINTER_DOWN, this.handlePointerDown, this)
		// this.input.on(Phaser.Input.Events.POINTER_MOVE, this.handlePointerMove, this)
		// this.input.on(Phaser.Input.Events.POINTER_UP, this.handlePointerUp, this)
		// console.log(this.selection);
	}	



	update(time: number, delta: number): void {
		if(this.gameState.cursors.right.isDown){
			this.gameState.player.x += 5;
		}
		
		if(this.gameState.cursors.left.isDown){
			this.gameState.player.x -= 5;
		}
		this.gameState.player.setInteractive();
		this.gameState.player.on('pointerup', function(pointer:any){
			console.log('click'+pointer.x, pointer.y);
			
	}, {});

	}
}
