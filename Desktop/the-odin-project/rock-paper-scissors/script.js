const gameForm = document.querySelector('form');
const playerMove = document.querySelector('.user-move').value;
const playerSelection = playerMove;

// randomly returns rock, paper, or scissors
function computerPlay() {
	const moves = ['rock', 'paper', 'scissors'];
	let move = moves[Math.floor(Math.random() * moves.length)];
	return move;
}

// checks for valid move selection
function checkPlayerSelection(playerSelection) {
	const regex = /rock|paper|scissors/gi;
	return regex.test(playerSelection);
}

// generates user selection against computer selection
function playRound(playerSelection, computerSelection) {
	let winner = '';

	if (!checkPlayerSelection(playerSelection)) {
		return `"${playerSelection}" is not a valid selection.`;
	} else {
		if (playerSelection === 'rock' && computerSelection === 'rock') {
			return "It's a draw!";
		} else if (playerSelection === 'rock' && computerSelection === 'paper') {
			return 'You lose.';
		} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
			return 'You win!';
		} else if (playerSelection === 'paper' && computerSelection === 'paper') {
			return "It's a draw!";
		} else if (
			playerSelection === 'paper' &&
			computerSelection === 'scissors'
		) {
			return 'You lose.';
		} else if (playerSelection === 'paper' && computerSelection === 'rock') {
			return 'You win!';
		} else if (
			playerSelection === 'scissors' &&
			computerSelection === 'scissors'
		) {
			return "It's a draw!";
		} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
			return 'You lose!';
		} else if (
			playerSelection === 'scissors' &&
			computerSelection === 'paper'
		) {
			return 'You win!';
		}
	}
}

function playGame() {
	const computerSelection = computerPlay();
	let playerScore = 0;
	let opponentScore = 0;
	let rounds = 5;

	for (let i = 0; i < rounds; i++) {

		let round = playRound(playerSelection, computerSelection);
		if (round === 'You win!') {
			playerScore += 1;
		} else if (round === 'You lose!') {
			opponentScore += 1;
		}
	}
	if (playerScore > opponentScore) {
		console.log('You win!!');
	} else {
		console.log('You Lost!!!');
	}
}

gameForm.addEventListener('submit', (e) => {
	e.preventDefault();

	checkPlayerSelection(playerSelection);
	playGame();
});
