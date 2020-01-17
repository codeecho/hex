import Phaser from 'phaser';

const { GameObjects: { Rectangle: PhaserRectangle } } = Phaser;

export default class Rectangle extends PhaserRectangle {
  constructor(scene, { bounds, fillColor }) {
    super(scene, bounds.centerX, bounds.centerY, bounds.width, bounds.height, fillColor);
  }
}
