import { Grid } from './Grid.js';
import { Snake } from './Snake.js';
import { InputManager } from './InputManager.js';

class Game {
    start() {
      const grid = new Grid();
      this.snake = new Snake(grid);
      const input = new InputManager(this.snake);
    }

    update(){
      this.snake.move();
    }
}

export {Game}