const game = () => {
	let winningText = document.querySelector('.winner');
	const emojiBtns = document.querySelector('.emoji-buttons');
	let playerPoints = 0;
	let compPoints = 0;

	const startGame = () => {
		const playButton = document.querySelector('.play-btn');
		const introScreen = document.querySelector('.intro');
		const matchScreen = document.querySelector('.match');

		playButton.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			matchScreen.classList.add('fadeIn');
		});
	};
	const playMatch = () => {
		const selectionButtons = document.querySelectorAll('[data-selection]');
		let playerHand = document.querySelector('.player-hand');
		let computerHand = document.querySelector('.computer-hand');

		const moves = [
			{
				name: 'rock',
				emoji: '✊',
				beats: 'scissors',
			},
			{
				name: 'paper',
				emoji: '✋',
				beats: 'rock',
			},
			{
				name: 'scissors',
				emoji: '✌',
				beats: 'paper',
			},
		];

		selectionButtons.forEach((selectionButton) => {
			selectionButton.addEventListener('click', (e) => {
				const selectionName = selectionButton.dataset.selection;
				const selection = moves.find((move) => move.name === selectionName);
				makeSelection(selection);
			});
		});

		//runs player/computer selection through winner function
		function makeSelection(selection) {
			const computerSelection = randomSelection();
			const youWin = isWinner(selection, computerSelection);
			const compWins = isWinner(computerSelection, selection);
			let playerScore = document.querySelector('.player-score');
			let compScore = document.querySelector('.computer-score');

			//change switch emojis to chosen moves
			playerHand.textContent = Object.values(selection)[1];
			computerHand.textContent = Object.values(computerSelection)[1];

			if (youWin) {
				playerPoints++;
				playerScore.textContent = playerPoints;
				winningText.textContent = `${Object.values(selection)[0]} beats 
          ${Object.values(computerSelection)[0]}!
          `;
			} else if (compWins) {
				compPoints++;
				compScore.textContent = compPoints;
				winningText.textContent = `${Object.values(computerSelection)[0]} beats 
          ${Object.values(selection)[0]}!
          `;
			} else {
				winningText.textContent = "It's a Draw!";
			}
			if (playerPoints === 3 || compPoints === 3) {
				gameOver();
			}

			//determines winning selection
			function isWinner(selection, opponentSelection) {
				return selection.beats === opponentSelection.name;
			}

			//randomly returns rock, paper, or scissors
			function randomSelection() {
				let move = moves[Math.floor(Math.random() * moves.length)];
				return move;
			}
		}

		const gameOver = () => {
			const restartButton = document.querySelector('.restart-game');

			if (playerPoints === 3) {
				winningText.textContent = 'You Win the Game!';
			} else if (compPoints === 3) {
				winningText.textContent = 'You Lose.';
			}

			emojiBtns.classList.add('fadeOut');
			restartButton.classList.add('fadeIn');
			restartButton.addEventListener('click', (e) => {
				location.reload();
			});
		};
	};
	//fades intro screen into main game screen
	startGame();

	//starts all inner game functions
	playMatch();
};

//start main game
game();
