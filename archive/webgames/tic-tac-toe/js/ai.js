import { Players } from "./constants.js";
import Game from './game.js';

function AIMove() {
    const availableMoves = [];

    // Collect all available moves (empty cells)
	Game.cells.forEach(col => {
		col.forEach(cell => {
			if (Game.cells[x][y] === Players.EMPTY) {
				availableMoves.push({ x, y });
			}
		});
	});

	if (availableMoves.length == 0) {
		return;
	}

    // Pick a random move from available moves
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    Game.captureCell(randomMove.x, randomMove.y);
}

export default AIMove;
