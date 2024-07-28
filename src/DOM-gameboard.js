function player_gameboard_rows(num) {
  const createPlayerRows = document.createElement('div');
  createPlayerRows.className = `row player-row${num}`;

  return createPlayerRows;
}

function computer_gameboard_rows(num) {
  const createComputerRow = document.createElement('div');
  createComputerRow.className = `row computer-row${num}`;

  return createComputerRow;
}

function player_gameboard_square() {
  const createPlayerSquare = document.createElement('div');
  createPlayerSquare.className = 'player-squares';

  return createPlayerSquare;
}

function computer_gameboard_square() {
  const createComputerSquare = document.createElement('div');
  createComputerSquare.className = 'computer-squares';

  return createComputerSquare;
}

function player_gameboard() {
  const player_board = document.getElementById('player-board');

  for (let i = 0; i < 10; i++) {
    player_board.appendChild(player_gameboard_rows(i));
    for (let j = 0; j < 10; j++) {
      const rows = document.querySelector('.player-row' + i);
      rows.appendChild(player_gameboard_square());
    }
  }
}

function computer_gamesboard() {
  const computer_board = document.getElementById('computer-board');

  for (let i = 0; i < 10; i++) {
    computer_board.appendChild(computer_gameboard_rows(i));
    for (let j = 0; j < 10; j++) {
      const rows = document.querySelector('.computer-row' + i);
      rows.appendChild(computer_gameboard_square());
    }
  }
}

export { player_gameboard, computer_gamesboard };
