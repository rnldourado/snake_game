import { Grid } from './Grid.js';
import { Snake } from './Snake.js';

class Game {
    start() {
      const grid = new Grid();
      this.snake = new Snake(grid);
    }

    update(){
      this.snake.move();
    }
}

export {Game}