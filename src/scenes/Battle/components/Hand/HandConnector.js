import { withState } from '../../../../store';
import Hand from './Hand';

export const create = withState((state, actions, props) => {
  return {
    get activeUnits() {
      const { selectedUnit, selectedHex, units } = state;
      if (selectedUnit) return [ selectedUnit ];
      if (selectedHex){
        return units.filter(x => x.hex === selectedHex.id);
      }
      return [];
    },
    get cards() {
      return state.activeHand
        .map(x => ({
          ...x,
          active: this.activeUnits.find(y => y.character.id === x.character.id)
        }));
    }
  };
})(Hand.create);

export default { create };
