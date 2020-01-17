import GridMap from './GridMap';
import Hexes from './Hexes';
import Units from './Units';
import HexAnimation from './HexAnimation';

export const create = (scene, { x, y, width }) => {
  const { getHexBounds } = new GridMap(x, y, width);
  Hexes.create(scene, { getHexBounds });
  Units.create(scene, { getHexBounds });
  HexAnimation.create(scene, { getHexBounds });
};

export default { create };
