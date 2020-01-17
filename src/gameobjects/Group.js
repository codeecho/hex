import Phaser from 'phaser';

const { GameObjects: { Group: PhaserGroup } } = Phaser;

export default class Group extends PhaserGroup {
  add(object, addToScene = true) {
    if (object instanceof Group) {
      super.addMultiple(object.children, addToScene);
    } else {
      super.add(object, addToScene);
    }
  }
}
