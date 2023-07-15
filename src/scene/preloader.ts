import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('map', 'tiles/dungeonworld.png');
        this.load.tilemapTiledJSON('dungeon', 'tiles/dungeon-01.json');
    }

    create() {
        this.scene.start('GameScene');
    }
}