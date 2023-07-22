import Phaser from 'phaser'

import GameScene from './scene/GameScene'
import Preloader from './scene/preloader'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 400,
	height: 250,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 100 },
		},
	},
	scene: [Preloader, GameScene],
	scale: {
		zoom: 2
	}
}

export default new Phaser.Game(config)
