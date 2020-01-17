import { autorun, observable, extendObservable } from 'mobx';

export const createStore = (scene, initialState, actions) => {
  const store = {
    state: observable(initialState),
    actions: Object.keys(actions).reduce((result, key) => ({
      ...result,
      [key]: (...args) => actions[key](store.state, ...args)
    }), {})
  };
  scene.store = store;
  return store;
};

export const observe = state => {
  const state$ = observable(state);
  let isInit = true;
  return fn => autorun(() => {
    fn(state$, isInit);
    isInit = false;
  });
};

export const withState = fn => (Component) => (scene, props) => {
  const { store } = scene;
  const combinedState = extendObservable(props, fn(store.state, store.actions, props));
  return new Component(scene, combinedState);
};
