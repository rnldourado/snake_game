import { Game } from './classes/Game.js';
import { Snake } from './classes/Snake.js';

(
    function main() {
        const game = new Game();
        game.start();
        setInterval(() => {
            game.update()
        }, 20);
    }
)()