import { range } from '../../../../utils/utils';
import Card from './Card';

export const create = (scene, props) => {
  const { x, y, width, height } = props;

  const cardWidth = width / 10;

  range(10)
    .forEach(i => Card.create(scene, {
      x: x + i * cardWidth,
      y,
      width: cardWidth,
      height,
      get card() { return props.cards[i]; }
    }));
};

export default { create };
