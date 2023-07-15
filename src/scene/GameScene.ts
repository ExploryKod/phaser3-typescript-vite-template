import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('GameScene')
	}

	preload() {	
		this.load.image('map', 'tiles/dungeonworld.png');
		this.load.tilemapTiledJSON('dungeon', 'tiles/dungeon-01.json');
	}

	create() {
		const map = this.make.tilemap({key: 'dungeon'});
		// @params tileset name, image used for created the tileset
		const tileset = map.addTilesetImage('dungeon', 'map');
		// @params the name of the layer itself as we see it in Tiled
		map.createLayer('Calque de Tuiles 1', tileset);

	}
}
