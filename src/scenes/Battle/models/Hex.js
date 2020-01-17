import { generateId } from '.';

export default function Hex(side, row, index) {
  return {
    id: generateId(),
    side,
    row,
    index,
    selected: false
  };
}
