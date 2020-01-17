import { withState } from '../../../../../store';
import Hexes from './Hexes';

export const create = withState((state, actions, props) => {
  return {
    hexes: state.hexes,
    onSelect: hex => actions.selectHex(hex)
  };
})(Hexes.create);

export default { create };
