import {BATTLE} from '../constants/scenes';
import { GRID_CELL_DOWN } from '../constants/events';

import {observable} from 'mobx';

import ReactScene from '../utils/ReactScene';

import Grid from '../components/Grid';
import SideBar from '../components/SideBar';
import Unit from '../components/Unit';
import HexAnimation from '../components/HexAnimation';

import BattleStateManager from '../state/BattleStateManager';
import BattleController from '../controllers/BattleController';

export default class Battle extends ReactScene{
    
    constructor(){
        super({
            key: BATTLE
        });
    }
    
    preload(){
        this.load.image('ice-wizard', 'assets/ice-wizard.png');
        this.load.spritesheet('slash',
            'assets/slash.png',
            { frameWidth: 70, frameHeight: 70 }
        );
    }
    
    create(){
        this.createController();
        this.createGrid();
        this.createSideBar();
        this.createUnits();
        this.createAnimations();
        this.createEventHandlers();
    }
    
    createController(){
        const stateManager = new BattleStateManager();
        this.state = stateManager.state;
        this.controller = new BattleController(stateManager);
    }
    
    createGrid(){
        this.grid = new Grid(this, 0, 0, 150);
    }
    
    createSideBar(){
        this.sideBar = new SideBar(this, {
            containerStyle: [
                'position:absolute',
                'left:800px',
                'top:0px',
                'width:160px',
                'height:640px'
            ]
        });
    }
    
    createUnits(){
        const { state, grid } = this;
        this.units = state.units.map(x => new Unit(this, observable({
            type: x.character.type,
            get cell(){
                return grid.getCell(x.hex);
            }
        })));
    }
    
    createAnimations(){
        const { state, grid } = this;
        this.anims.create({
            key: 'slash',
            frames: this.anims.generateFrameNumbers('slash', { start: 0, end: 24 }),
            frameRate: 20
        });
        
        this.hexAnimation = new HexAnimation(this, observable({
            get animation() {
                const { hexAnimation } = state;
                return {
                    id: hexAnimation.id,
                    type: hexAnimation.type,
                    cell: grid.getCell(hexAnimation.hex)
                };

            }
        }));
    }
    
    createEventHandlers(){
        const { grid, controller } = this;
        
        grid.on(GRID_CELL_DOWN, (cell) => controller.selectHex(this.getHexFromCell(cell)));
    }
    
    getHexFromCell(cell){
        return this.state.hexes.find(x => {
            return x.side === cell.side
                && x.row === cell.row
                && x.index === cell.index;
        });
    }
    
}