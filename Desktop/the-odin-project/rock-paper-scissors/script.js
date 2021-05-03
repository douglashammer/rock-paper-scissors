const selectionButtons = document.querySelectorAll('[data-selection]');
const playButton = document.querySelector('.play-btn');

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

		playButton.addEventListener('click', (e) => {
			makeSelection(selection);
		});
	});
});

function makeSelection(selection) {
	const computerSelection = randomSelection();
	const youWin = isWinner(selection, computerSelection);
	const compWins = isWinner(computerSelection, selection);

	if (youWin) {
    console.log('you win');
    console.log(selection)
    console.log(computerSelection);
	} else if (compWins) {
    console.log('computer wins');
    console.log(selection)
    console.log(computerSelection);
	} else {
    console.log('its a draw');
    console.log(selection)
    console.log(computerSelection);
	}
}

function isWinner(selection, opponentSelection) {
	return selection.beats === opponentSelection.name;
}

// randomly returns rock, paper, or scissors
function randomSelection() {
	let move = moves[Math.floor(Math.random() * moves.length)];
	return move;
}
