const selectUnit = (state, id) => {
  const unit = state.units.find(x => x.id === id);
  const { selectedHex } = state;
  const unitHex = state.hexes.find(x => x.id === unit.hex);

  if (!selectedHex || selectedHex !== unitHex) return selectHex(state, unitHex);

  setSelectedUnit(state, unit);
};

const setSelectedUnit = (state, unit) => {
  state.units.forEach(x => { x.selected = (unit.id === x.id); });
  state.moveActivated = false;
};

const deselectUnits = state => {
  state.units.forEach(x => { x.selected = false; });
  state.moveActivated = false;
};

const playHexAnimation = (state, hex, type) => {
  state.hexAnimation = {
    id: Math.random(),
    type,
    hex: hex.id
  };
};

const selectHex = (state, hex) => {
  if (canMoveUnitToHex(state, hex)) return moveUnitToHex(state, hex);

  return setSelectedHex(state, hex);
};

const deselectHexes = state => {
  state.hexes.forEach(x => { x.selected = false; });
};

const canMoveUnitToHex = (state, hex) => {
  const { selectedUnit, moveActivated } = state;
  return moveActivated && selectedUnit && selectedUnit.side === hex.side && state.units.filter(x => x.hex === hex.id).length < 3;
};

const moveUnitToHex = (state, hex) => {
  state.selectedUnit.hex = hex.id;
  deselectUnits(state);
};

const setSelectedHex = (state, hex) => {
  state.hexes.forEach(x => { x.selected = (hex.id === x.id); });
  deselectUnits(state);
};

const endTurn = state => {
  state.activeArmyIndex = state.activeArmyIndex === 0 ? 1 : 0;
  state.moveActivated = false;
};

const activateMove = state => {
  state.moveActivated = true;
};

const actions = {
  selectUnit,
  selectHex,
  endTurn,
  activateMove
};

export default actions;
