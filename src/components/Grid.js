import {POINTER_DOWN, GRID_CELL_DOWN} from '../constants/events';
import {LEFT, RIGHT} from '../constants/side';
import {FRONT, BACK} from '../constants/row';

export default class Grid extends Phaser.GameObjects.GameObject{
 
    constructor(scene, x, y, cellSize){
        super(scene, 'Grid');
        
        scene.add.existing(this);
        
        this.cells = []
            .concat(new BackRow(scene, LEFT, x, y, cellSize).cells)
            .concat(new FrontRow(scene, LEFT, x + cellSize, y, cellSize).cells)
            .concat(new FrontRow(scene, RIGHT, x + 100 + (cellSize*2), y, cellSize).cells)
            .concat(new BackRow(scene, RIGHT, x + 100 + (cellSize*3), y, cellSize).cells);
            
        this.cells.forEach(cell => {
            cell.on(GRID_CELL_DOWN, cell => this.emit(GRID_CELL_DOWN, cell));
        })
    }
    
    getCell(hex){
        if(!hex) return;
        return this.cells.find(x => {
            return x.side === hex.side
                && x.row === hex.row
                && x.index === hex.index;
        })
    }
 
}

class BackRow{
    
    constructor(scene, side, x, y, cellSize){
        this.cells = [
            new GridCell(scene, side, BACK, 1, x, y + cellSize/2, cellSize),
            new GridCell(scene, side, BACK, 2, x, y + cellSize/2 + cellSize, cellSize)
        ];
    }
    
}

class FrontRow{
    
    constructor(scene, side, x, y, cellSize){
        this.cells = [
            new GridCell(scene, side, FRONT, 1, x, y, cellSize),
            new GridCell(scene, side, FRONT, 2, x, y + cellSize, cellSize),
            new GridCell(scene, side, FRONT, 3, x, y + cellSize + cellSize, cellSize)
        ];
    }
    
}

class GridCell extends Phaser.GameObjects.GameObject{
    
    constructor(scene, side, row, index, x, y, size){
        super(scene, 'GridCell');
        
        this.side = side;
        this.row = row;
        this.index = index;
        this.x = x;
        this.y = y;
        this.size = size;
        
        scene.add.existing(this);

        this.graphics = scene.add.graphics();        
        
        this.initShape();
        this.initEvents();
    }
    
    initShape(){
        this.shape = new Phaser.Geom.Rectangle(this.x, this.y, this.size, this.size);
        
        const { graphics, shape } = this;
        
        graphics.fillStyle(Phaser.Display.Color.GetColor(0, 0, 100));
        graphics.fillRectShape(shape);
        graphics.lineStyle(1, Phaser.Display.Color.GetColor(255, 255, 255));
        graphics.strokeRectShape(shape);
    }
    
    initEvents(){
        const { graphics, shape } = this;
        
        graphics.setInteractive(shape, Phaser.Geom.Rectangle.Contains);

        graphics.on(POINTER_DOWN, () => {
            this.emit(GRID_CELL_DOWN, this);
        }, this);
    }
    
    get center(){
        const {centerX, centerY} = this.shape;
        return new Phaser.Math.Vector2(centerX, centerY);
    }
    
}