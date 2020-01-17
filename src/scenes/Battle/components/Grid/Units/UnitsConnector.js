import { withState } from '../../../../../store';
import Units from './Units';

export const create = withState((state, actions, props) => {
  return {
    units: state.units
  };
})(Units.create);

export default { create };
