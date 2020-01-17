import Hex from './Hex';

export const create = (scene, { hexes, getHexBounds, onSelect }) => {
  hexes.forEach(hex => Hex.create(scene, { hex, bounds: getHexBounds(hex), onSelect }));
};

export default { create };
