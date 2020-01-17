import Unit from './Unit';

export const create = (scene, { units, getHexBounds }) => {
  units.forEach(({ id }) => Unit.create(scene, { id, getHexBounds }));
};

export default { create };
