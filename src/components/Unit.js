import {autorun} from 'mobx';
import {RIGHT} from '../constants/side';

export default class Unit extends Phaser.GameObjects.Sprite{
    
    constructor(scene, state){
        const { type, cell } = state;
        const { center, size } = cell;
        const { x, y } = center;
        
        super(scene, x, y, type);
        
        this.state = state;
        
        scene.add.existing(this);
        
        this.setDisplaySize(size, size);
        this.setSize(size, size);
        
        autorun(() => {
            const { cell } = this.state;
            const { center, side } = cell;
            this.setPosition(center.x, center.y);
            this.flipX = side === RIGHT;
        });
    }
    
}