import './index.css';

import Phaser from 'phaser';

import Battle from './scenes/Battle';

var config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 960,
  height: 640,
  scene: [
    Battle
  ]
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
