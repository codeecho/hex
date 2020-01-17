import { withState } from '../../../../store';
import SideBar from './SideBar';

export const create = withState((state, actions, props) => {
  return {
    get activeArmy() { return state.activeArmy; },
    get selectedHex() { return state.selectedHex; },
    get selectedUnit() { return state.selectedUnit; },
    get moveActivated() { return state.moveActivated; },
    activateMove: () => actions.activateMove(),
    endTurn: () => actions.endTurn()
  };
})(SideBar);

export default { create };
