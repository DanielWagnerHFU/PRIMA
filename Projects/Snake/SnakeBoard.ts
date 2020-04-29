namespace Snake {

    class SnakeBoard {
        private board: SnakeField[][];
        private width: number;
        private height: number;

        constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
            this.initializeBoard();
        }

        public getField(x: number, y: number): SnakeField {
            return this.board[x][y];
        }

        private initializeBoard(): void {
            for(let x: number = 0; x < this.width; x++) {
                for(let y: number = 0; x < this.width; x++) {
                    this.board[x][y] = SnakeField.Empty;
                }
            }
        }
    }

    enum SnakeField {
        Empty,
        Snake,
        Food
    }
}