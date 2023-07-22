import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('map', 'dungeon_tiles/dungeonworld.png');
        this.load.tilemapTiledJSON('dungeon', 'dungeon_tiles/dungeon-01.json');
        this.load.image('player', 'dungeon_tiles/characters/bat.png');
    }

    create() {
        this.scene.start('GameScene');
    }
}