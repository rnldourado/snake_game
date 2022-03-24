class Grid {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.gridArray = this.populate()
    }

    populate() {
        let gridArray = [];
        for (let x = 0; x < 40; x++) {
            const row = this.createTile('row', x, this.canvas);
            gridArray.push(row);

            for (let y = 0; y < 40; y++) {
                const column = this.createTile('col', y, row);
            }
        }
        return gridArray;
    }

    createTile(type, value, father) {
        const element = document.createElement('div')
        element.classList.add(type)
        element.setAttribute(type, value)
        father.appendChild(element)

        return element
    }

    showSnake(snake) {
        snake.body.forEach(([x, y])=>{
            this.gridArray[x].children[y].classList.add('snake');
        })
    }
    
}

export { Grid }
