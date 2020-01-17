import { BATTLE } from '../../constants/scenes';
import ReactScene from '../../react/ReactScene';
import Assets from './assets/Assets';
import Animations from './assets/Animations';
import { Grid, Hand, SideBar } from './components';
import Store from './store';

export default class Battle extends ReactScene {
  constructor() {
    super({
      key: BATTLE
    });
  }

  preload() {
    Assets.load(this);
  }

  create() {
    this.init();
    Store.init(this);
    Animations.load(this);
    this.render();
  }

  init() {
    this.input.topOnly = true;
  }

  render() {
    Grid.create(this, { x: 0, y: 0, width: 750 });
    SideBar.create(this, { x: 800, y: 0, width: 160, height: 640 });
    Hand.create(this, { x: 0, y: 500, width: 750, height: 100 });
  }
}
