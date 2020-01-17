import { generateId } from '.';

export default function Army(name) {
  return {
    id: generateId(),
    name
  };
}
