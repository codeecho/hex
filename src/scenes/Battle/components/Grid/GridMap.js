import Phaser from 'phaser';
import { LEFT } from '../../constants/side';
import { FRONT, BACK } from '../../constants/row';

export default function GridMap(x, y, width) {

  const hexSize = width / 5;

  function getHexBounds(hex) {
    let hexX = x;
    let hexY = y;
    if (hex.side === LEFT){
      if (hex.row === FRONT) hexX += hexSize;
    } else {
      hexX += hexSize * 3;
      if (hex.row === BACK) hexX += hexSize;
    }

    const offset = hex.row === BACK ? hexSize / 2 : 0;

    hexY += offset + (hexSize * (hex.index - 1));

    return new Phaser.Geom.Rectangle(hexX, hexY, hexSize, hexSize);
  }

  return {
    getHexBounds
  };

}
