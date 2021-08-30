class TicTacToe {
	constructor() {
		this.field = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
		this.firstPlayer = "x";
		this.secondPlayer = "o";
		this.currentPlayer = "x";
	}

	getCurrentPlayerSymbol() {
		return this.currentPlayer;
	}

	nextTurn(rowIndex, columnIndex) {
		if (!this.field[rowIndex][columnIndex]) {
			this.field[rowIndex][columnIndex] = this.currentPlayer;
			this.currentPlayer =
				this.currentPlayer !== this.firstPlayer
					? this.firstPlayer
					: this.secondPlayer;
		}
	}

	isFinished() {
		return !!(this.isDraw() || this.getWinner() !== null);
	}

	getWinner() {
		return (this.field[0][2] === "x" &&
			this.field[0][1] === "x" &&
			this.field[0][0] === "x") ||
			!(
				this.field[1][0] !== "x" ||
				this.field[1][1] !== "x" ||
				this.field[1][2] !== "x"
			) ||
			!(
				this.field[2][0] !== "x" ||
				this.field[2][1] !== "x" ||
				this.field[2][2] !== "x"
			) ||
			!(
				this.field[0][0] !== "x" ||
				this.field[1][0] !== "x" ||
				this.field[2][0] !== "x"
			) ||
			!(
				this.field[0][1] !== "x" ||
				this.field[1][1] !== "x" ||
				this.field[2][1] !== "x"
			) ||
			!(
				this.field[0][2] !== "x" ||
				this.field[1][2] !== "x" ||
				this.field[2][2] !== "x"
			) ||
			!(
				this.field[0][0] !== "x" ||
				this.field[1][1] !== "x" ||
				this.field[2][2] !== "x"
			) ||
			!(
				this.field[0][2] !== "x" ||
				this.field[1][1] !== "x" ||
				this.field[2][0] !== "x"
			)
			? "x"
			: !(
					this.field[0][0] !== "o" ||
					this.field[0][1] !== "o" ||
					this.field[0][2] !== "o"
			  ) ||
			  !(
					this.field[1][0] !== "o" ||
					this.field[1][1] !== "o" ||
					this.field[1][2] !== "o"
			  ) ||
			  !(
					this.field[2][0] !== "o" ||
					this.field[2][1] !== "o" ||
					this.field[2][2] !== "o"
			  ) ||
			  !(
					this.field[0][0] !== "o" ||
					this.field[1][0] !== "o" ||
					this.field[2][0] !== "o"
			  ) ||
			  !(
					this.field[0][1] !== "o" ||
					this.field[1][1] !== "o" ||
					this.field[2][1] !== "o"
			  ) ||
			  !(
					this.field[0][2] !== "o" ||
					this.field[1][2] !== "o" ||
					this.field[2][2] !== "o"
			  ) ||
			  !(
					this.field[0][0] !== "o" ||
					this.field[1][1] !== "o" ||
					this.field[2][2] !== "o"
			  ) ||
			  !(
					this.field[0][2] !== "o" ||
					this.field[1][1] !== "o" ||
					this.field[2][0] !== "o"
			  )
			? "o"
			: null;
	}

	noMoreTurns() {
		for (let stroke of this.field)
			for (let item of stroke)
				if (item !== null) {
				} else return false;
		return true;
	}

	isDraw() {
		for (let stroke of this.field)
			for (let item of stroke)
				if (item !== null) {
				} else return false;

		return !(
			(this.field[0][0] === "x" &&
				this.field[0][1] === "x" &&
				this.field[0][2] === "x") ||
			(this.field[1][0] === "x" &&
				this.field[1][1] === "x" &&
				this.field[1][2] === "x") ||
			(this.field[2][0] === "x" &&
				this.field[2][1] === "x" &&
				this.field[2][2] === "x") ||
			(this.field[0][0] === "x" &&
				this.field[1][0] === "x" &&
				this.field[2][0] === "x") ||
			(this.field[0][1] === "x" &&
				this.field[1][1] === "x" &&
				this.field[2][1] === "x") ||
			(this.field[0][2] === "x" &&
				this.field[1][2] === "x" &&
				this.field[2][2] === "x") ||
			(this.field[0][0] === "x" &&
				this.field[1][1] === "x" &&
				this.field[2][2] === "x") ||
			(this.field[0][2] === "x" &&
				this.field[1][1] === "x" &&
				this.field[2][0] === "x") ||
			(this.field[0][0] === "o" &&
				this.field[0][1] === "o" &&
				this.field[0][2] === "o") ||
			(this.field[1][0] === "o" &&
				this.field[1][1] === "o" &&
				this.field[1][2] === "o") ||
			(this.field[2][0] === "o" &&
				this.field[2][1] === "o" &&
				this.field[2][2] === "o") ||
			(this.field[0][0] === "o" &&
				this.field[1][0] === "o" &&
				this.field[2][0] === "o") ||
			(this.field[0][1] === "o" &&
				this.field[1][1] === "o" &&
				this.field[2][1] === "o") ||
			(this.field[0][2] === "o" &&
				this.field[1][2] === "o" &&
				this.field[2][2] === "o") ||
			(this.field[0][0] === "o" &&
				this.field[1][1] === "o" &&
				this.field[2][2] === "o") ||
			(this.field[0][2] === "o" &&
				this.field[1][1] === "o" &&
				this.field[2][0] === "o")
		);
	}

	getFieldValue(rowIndex, colIndex) {
		return this.field[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
