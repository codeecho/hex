import { generateId } from '../scenes/Battle/models';

export default function Character({ name, texture }) {
  return {
    id: generateId(),
    name,
    texture
  };
}
