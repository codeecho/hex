import Phaser from 'phaser';

const { GameObjects: { Sprite: PhaserSprite } } = Phaser;

export default class Sprite extends PhaserSprite {
  constructor(scene, { x, y, width, height, size, bounds, texture }) {
    super(scene, x === undefined ? bounds.centerX : x, y === undefined ? bounds.centerY : y, texture);
    width = width || size || (bounds && bounds.width);
    height = height || size || (bounds && bounds.height);
    if (width && height) {
      this.setDisplaySize(width, height);
    }
  }
}
