import Phaser from 'phaser';
import { RIGHT } from '../../../../constants/side';
import { POINTER_DOWN } from '../../../../../../constants/events';
import { observe } from '../../../../../../store';
import Sprite from '../../../../../../gameobjects/Sprite';

export const create = (scene, props) => {

  const { unit: { side, character: { texture } }, bounds, onSelect } = props;

  const sprite = new Sprite(scene, { bounds, texture });

  sprite.flipX = side === RIGHT;

  sprite.setInteractive(
    new Phaser.Geom.Rectangle(
      0 + sprite.width / 4,
      0 + sprite.height / 4,
      sprite.width / 2,
      sprite.height / 2
    ),
    Phaser.Geom.Rectangle.Contains
  );

  sprite.on(POINTER_DOWN, () => onSelect());

  scene.add.existing(sprite);

  const onUpdate = observe(props);

  onUpdate(props$ => {
    const { selected, bounds, index, unitsOnHex } = props$;
    sprite.setTint(selected ? 0xff9955 : undefined);
    const xOffset = unitsOnHex > 1 ? index === 0 ? 30 : -30 : 0;
    const yOffset = index === 1 ? -30 : index === 2 ? 30 : 0;
    sprite.setPosition(bounds.centerX + xOffset, bounds.centerY + yOffset);
  });
};

export default { create };
