import Cell from './Cell';

class Grid {
    constructor(width, height) {
        this.cells = [];
        for (let y = 0; y < height; y++) {
            const row = [];
            for (let x = 0; x < width; x++) {
                row.push(new Cell(x, y, width, height));
            }
            this.cells.push(row);
        }
    }

    update() {
        const oldCells = this.cells.map(row => row.map(cell => ({ ...cell })));
        for (const row of this.cells) {
            for (const cell of row) {
                this.cells[cell.y][cell.x].isAlive = cell.getNextStatus(oldCells);
            }
        }
    }
}

export default Grid;