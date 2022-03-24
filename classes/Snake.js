class Snake {
    constructor(grid) {
        this.grid = grid;
        this.body = this.#populateBody();
        this.size = 4;
        this.direction = 'R';

        grid.showSnake(this);
    }

    #populateBody() {
        return [[4, 4], [4, 3], [4, 2], [4, 1]]
    }


    eat() {

    }

    die() {

    }

    move() {
        let newHead
        let newTail = this.body[this.size - 1]
        console.log(this.body[0], newTail)

        if (this.direction == 'U') {
            newHead = [this.body[0][0] - 1, this.body[0][1]];
        }
        if (this.direction == 'D') {
            newHead = [this.body[0][0] + 1, this.body[0][1]];
        }
        if (this.direction == 'L') {
            newHead = [this.body[0][0], this.body[0][1] - 1];
        }
        if (this.direction == 'R') {
            newHead = [this.body[0][0], this.body[0][1] + 1];
        }
        
        for (let i = this.size; i > 0; --i) {        // Atualiza o array da cobra
            this.body[i] = this.body[i - 1]
        }

        this.body[0] = newHead;
                    //       x, y        x2, y2 
        this.updateSnake(...newHead, ...newTail)
        
    }
    
    updateSnake(x, y, x2, y2) {

        this.grid.gridArray[x].children[y].classList.add('snake');
        this.grid.gridArray[x2].children[y2].classList.remove('snake');
    }
}

export { Snake }