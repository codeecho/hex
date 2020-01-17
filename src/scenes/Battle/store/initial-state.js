import { LEFT, RIGHT } from '../constants/side';
import { FRONT, BACK } from '../constants/row';
import Hex from '../models/Hex';
import Army from '../models/Army';
import Unit from '../models/Unit';
import Card from '../models/Card';
import characters from '../../../constants/characters';

const hexes = [
  new Hex(LEFT, BACK, 1),
  new Hex(LEFT, BACK, 2),
  new Hex(LEFT, FRONT, 1),
  new Hex(LEFT, FRONT, 2),
  new Hex(LEFT, FRONT, 3),
  new Hex(RIGHT, BACK, 1),
  new Hex(RIGHT, BACK, 2),
  new Hex(RIGHT, FRONT, 1),
  new Hex(RIGHT, FRONT, 2),
  new Hex(RIGHT, FRONT, 3)
];

const armies = [
  new Army('Army 1'),
  new Army('Army 2')
];

const units = characters
  .slice(0, 5)
  .map((x, i) => new Unit(armies[0].id, LEFT, x, hexes[i].id))
  .concat(characters
    .slice(5, 10)
    .map((x, i) => new Unit(armies[1].id, RIGHT, x, hexes[5 + i].id))
  )

const hands = {
  [armies[0].id]: [
    new Card('Strike', units[0].character),
    new Card('Dual Strike', units[0].character),
    new Card('Triple Strike', units[0].character),
    new Card('Strike', units[1].character),
    new Card('Dual Strike', units[1].character),
    new Card('Strike', units[2].character),
    new Card('Dual Strike', units[2].character),
    new Card('Strike', units[3].character),
    new Card('Dual Strike', units[3].character),
    new Card('Triple Strike', units[3].character),
  ],
  [armies[1].id]: [
    new Card('Strike', units[4].character),
    new Card('Dual Strike', units[4].character),
    new Card('Strike', units[4].character),
    new Card('Dual Strike', units[4].character),
    new Card('Strike', units[4].character),
    new Card('Dual Strike', units[4].character),
    new Card('Strike', units[4].character),
    new Card('Dual Strike', units[4].character),
    new Card('Strike', units[4].character),
    new Card('Dual Strike', units[4].character),
  ]
};

const state = {
  hexes,
  armies,
  units,
  hands,
  activeArmyIndex: 0,
  hexAnimation: { id: 0, hex: hexes[0].id, type: 'slash' },
  moveActivated: false,
  get activeArmy() { return this.armies[this.activeArmyIndex]; },
  get selectedUnit() { return this.units.find(x => x.selected); },
  get selectedHex() { return this.hexes.find(x => x.selected); },
  get activeHand() { return this.hands[this.activeArmy.id]; }
};

export default state;
