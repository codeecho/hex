export default class BattleController{
    
    constructor(stateManager){
        this.stateManager = stateManager;
        this.state = stateManager.state;
    }
    
    selectHex(hex) {
        const { stateManager, state } = this;
        
        const { units, selectedUnit } = state;
        
        const unit = units.find(x => x.hex.id === hex.id);
        
        if(unit) return stateManager.selectUnit(unit);
        
        if(selectedUnit) return stateManager.moveSelectedUnit(hex);
    }
}