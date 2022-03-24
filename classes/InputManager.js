class InputManager {
    constructor(snake) {
        this.snake = snake;
        document.addEventListener('keydown', (event) => {
            event.preventDefault()
            let keyPressed = event.key.toLocaleLowerCase()
            let desiredDirection = this.snake.direction;
            
            if (keyPressed == "arrowleft" || keyPressed == "a") {
                desiredDirection = 'L';
            }
            else if (keyPressed == "arrowright" || keyPressed == "d") {
                desiredDirection = 'R';
            }
            else if (keyPressed == "arrowup" || keyPressed == "w") {
                desiredDirection = 'U';
            }
            else if (keyPressed == "arrowdown" || keyPressed == "s") {
                desiredDirection = 'D';
            }
            // console.log(this.isDirectionOpposite(desiredDirection))
            // if (this.isDirectionOpposite(desiredDirection))
            //   return
            this.snake.direction = desiredDirection;
        });
    }

    isDirectionOpposite(direction) {
        console.log(direction)
        switch (direction) {
          case 'U':
              if (this.snake.direction == 'D')
                return true
          case 'D':
            if (this.snake.direction == 'U')
                return true
          case 'R':
            if (this.snake.direction == 'L')
                return true
          case 'L':
            if (this.snake.direction == 'R')
                return true
        
          default:
            return false
        }
    }

}

export { InputManager }