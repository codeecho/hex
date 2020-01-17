import initialState from './initial-state';
import actions from './actions';
import { createStore } from '../../../store';

export const init = scene => {
  return createStore(scene, initialState, actions);
};

export default {
  init
};
