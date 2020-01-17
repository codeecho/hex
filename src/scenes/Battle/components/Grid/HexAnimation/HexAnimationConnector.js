import { withState } from '../../../../../store';
import HexAnimation from './HexAnimation';

export const create = withState((state, actions, props) => {
  const { getHexBounds } = props;
  return {
    get animation() { return state.hexAnimation; },
    get bounds() {
      const hex = state.hexes.find(x => x.id === this.animation.hex);
      return getHexBounds(hex);
    },
    get type() { return this.animation.type; }
  };
})(HexAnimation.create);

export default { create };
