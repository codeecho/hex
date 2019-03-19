import {observable} from 'mobx';
import {LEFT, RIGHT} from '../constants/side';
import {FRONT, BACK} from '../constants/row';
import IceWizard from '../models/IceWizard';
import Hex from '../models/Hex';
import Army from '../models/Army';
import Unit from '../models/Unit';

export default class BattleStateManager{
    
    constructor(){
        
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
        
        const armies = {
            LEFT: new Army('Army 1'),
            RIGHT: new Army('Army 2')
        }
        
        const units = [
            new Unit(armies[LEFT], new IceWizard(), hexes[0]),
            new Unit(armies[RIGHT], new IceWizard(), hexes[9])            
        ];
        
        this.state = observable({
            hexes,
            armies,
            units,,
            hexAnimation: { id: 0 }
            activeArmyIndex: 0,
            get selectedUnit() { return this.units.find(x => x.selected); }
            get activeArmy() { return }
        });
        
        window.state = this.state;
    }
    
    selectUnit(unit){
        this.state.units.forEach(x => x.selected = unit === x);
    }
    
    moveSelectedUnit(hex){
        this.state.selectedUnit.hex = hex;
        this.playAnimation(hex, 'slash');
    }
    
    playAnimation(hex, type){
        const { hexAnimation } = this.state;
        hexAnimation.id = Math.random();
        hexAnimation.hex = hex;
        hexAnimation.type = type;
    }
    
}