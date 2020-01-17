import React from 'react';

import { observer } from 'mobx-react';

import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

window.toast = toast;

const SideBarComponent = observer(function ({ state: { activeArmy, selectedHex, selectedUnit, moveActivated, activateMove, endTurn } }) {
  return (
    <div className="well" style={{ height: '100%' }}>
      <h3>{ activeArmy.name }</h3>
      <Button block onClick={endTurn}>End Turn</Button>
      { selectedHex && <h4>Hex { selectedHex.row[0].toUpperCase() + ':' + selectedHex.index }</h4> }
      { selectedUnit && <h4>{ selectedUnit.character.name }</h4> }
      { selectedUnit && selectedUnit.army === activeArmy.id && (
        <Button block disabled={moveActivated} onClick={activateMove}>Move</Button>
      )}
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} hideProgressBar />
    </div>
  );
});

export default class SideBar {
  constructor(scene, props) {
    const containerStyle = [
      'position:absolute',
      `left:${props.x}px`,
      `top:${props.y}px`,
      `width:${props.width}px`,
      `height:${props.height}px`
    ];
    scene.react.add(<SideBarComponent containerStyle={containerStyle} state={props} />);
  }
}
