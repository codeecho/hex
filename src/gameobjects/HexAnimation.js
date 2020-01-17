/* global Phaser */
import { observe } from 'mobx';

export default class HexAnimation extends Phaser.GameObjects.Sprite {
  constructor(scene, state) {
    super(scene, 100, 100, 'slash');
    this.state = state;

    scene.add.existing(this);

    observe(state, 'animation', () => {
      const { animation } = this.state;
      const { cell, type } = animation;
      const { center, size } = cell;
      const { x, y } = center;

      this.setDisplaySize(size, size);
      this.setSize(size, size);

      this.setPosition(x, y);

      this.anims.play(type, true);
    });
  }
}
