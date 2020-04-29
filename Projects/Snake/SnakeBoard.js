"use strict";
var Snake;
(function (Snake) {
    class SnakeBoard {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.initializeBoard();
        }
        getField(x, y) {
            return this.board[x][y];
        }
        initializeBoard() {
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; x < this.width; x++) {
                    this.board[x][y] = SnakeField.Empty;
                }
            }
        }
    }
    let SnakeField;
    (function (SnakeField) {
        SnakeField[SnakeField["Empty"] = 0] = "Empty";
        SnakeField[SnakeField["Snake"] = 1] = "Snake";
        SnakeField[SnakeField["Food"] = 2] = "Food";
    })(SnakeField || (SnakeField = {}));
})(Snake || (Snake = {}));
//# sourceMappingURL=SnakeBoard.js.map