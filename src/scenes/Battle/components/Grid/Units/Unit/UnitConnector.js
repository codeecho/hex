import { withState } from '../../../../../../store';
import Unit from './Unit';

export const create = withState((state, actions, props) => {
  const { id, getHexBounds } = props;
  return {
    get unit() { return state.units.find(x => x.id === id); },
    get selected() { return this.unit.selected; },
    get hex() { return state.hexes.find(x => x.id === this.unit.hex); },
    get bounds() { return getHexBounds(this.hex); },
    get unitsOnHex() { return state.units.filter(x => x.hex === this.unit.hex).length; },
    get index() { return state.units.filter(x => x.hex === this.unit.hex).indexOf(this.unit); },
    onSelect: () => actions.selectUnit(id)
  };
})(Unit.create);

export default { create };
