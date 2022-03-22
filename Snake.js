class Snake {
    constructor(grid, event) {
        this.grid = grid;
        this.size = 3;
        this.body = this.#populateBody();
        this.direction = 'R'

        grid.spawnSnake(this);
        document.addEventListener('keydown', function (event) {
            // event.preventDefault()
            if (event.keyCode == 37) {
                this.direction = 'L';
            }
            else if (event.keyCode == 39) {
                this.direction = 'R';
            }
            else if (event.keyCode == 38) {
                this.direction = 'U';
            }
            else if (event.keyCode == 40) {
                this.direction = 'D';
            }
        });
    }

    #populateBody() {
        return [[4, 4], [4, 3], [4, 2], [4, 1]]
    }


    eat() {

    }

    die() {

    }

    move() {
        let newHead;

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

        const x = newHead[0]
        const y = newHead[1]

        const x2 = this.body[this.body.length - 1][0]
        const y2 = this.body[this.body.length - 1][1]

        for (let i = this.body.length - 1; i > 0; --i) {
            this.body[i] = this.body[i - 1]
        }

        this.body[0] = newHead;

        this.grid.gridArray[x].children[y].classList.add('snake');
        this.grid.gridArray[x2].children[y2].classList.remove('snake');

    }
}

export { Snake }