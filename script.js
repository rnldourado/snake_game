import { Game } from './Game.js';
import { Snake } from './Snake.js';

(
    function main() {
        const game = new Game();
        game.start();
        setInterval(() => {
            game.update()
        }, 1000);
    }
)()