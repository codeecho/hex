import Phaser from 'phaser';
import { observe } from '../../../../store';
import Sprite from '../../../../gameobjects/Sprite';
import Rectangle from '../../../../gameobjects/Rectangle';

const {
  Display: { Color: { GetColor } },
  Geom: { Rectangle: GeomRectangle }
} = Phaser;

export const create = (scene, props) => {
  const { x, y, width, height } = props;

  const bounds = new GeomRectangle(x, y, width, height);

  const background = new Rectangle(scene, {
    bounds,
    fillColor: GetColor(0, 0, 100),
  });

  scene.add.existing(background);

  const sprite = new Sprite(scene, {
    bounds,
    texture: 'wizard'
  });

  scene.add.existing(sprite);

  const onUpdate = observe(props);

  onUpdate(props$ => {
    const { card: { active, character: { texture } } } = props$;
    sprite.setTexture(texture);
    [background, sprite].forEach(x => x.setY(active ? bounds.centerY - 10 : bounds.centerY));
  });
};

export default { create };
