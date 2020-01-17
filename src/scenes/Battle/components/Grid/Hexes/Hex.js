import Phaser from 'phaser';
import { POINTER_DOWN } from '../../../../../constants/events';
import Rectangle from '../../../../../gameobjects/Rectangle';

export const create = (scene, { hex, bounds, onSelect }) => {
  const background = new Rectangle(scene, {
    bounds,
    fillColor: Phaser.Display.Color.GetColor(0, 0, 100),
  });

  scene.add.existing(background);

  const hitbox = new Rectangle(scene, { bounds })
    .setInteractive();

  scene.add.existing(hitbox);

  hitbox.on(POINTER_DOWN, () => onSelect(hex));
};

export default { create };
