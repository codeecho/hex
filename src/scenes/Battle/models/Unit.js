import { generateId } from '.';

export default function Unit(army, side, character, hex) {
  return {
    id: generateId(),
    army,
    side,
    character,
    hex,
    selected: false
  };
}
