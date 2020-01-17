import Sprite from '../../../../../gameobjects/Sprite';
import { observe } from '../../../../../store';

export const create = (scene, props) => {

  const { bounds } = props;

  const sprite = new Sprite(scene, { bounds, texture: 'slash' });

  scene.add.existing(sprite);

  const onUpdate = observe(props);

  onUpdate((props$, isInit) => {
    const { bounds: { centerX, centerY }, type } = props$;
    if (isInit) return;
    sprite.setPosition(centerX, centerY);
    sprite.anims.play(type, true);
  });

};

export default { create };
