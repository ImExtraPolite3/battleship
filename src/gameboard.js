function player_gameboard_rows(num) {
  const createRow = document.createElement('div');
  createRow.className = `row player-row${num}`;

  return createRow;
}

function computer_gameboard_rows(num) {
  const createRow = document.createElement('div');
  createRow.className = `row computer-row${num}`;

  return createRow;
}

function player_gameboard_square() {
  const createSquare = document.createElement('div');
  createSquare.className = 'player-squares';

  return createSquare;
}

function computer_gameboard_square() {
  const createSquare = document.createElement('div');
  createSquare.className = 'computer-squares';

  return createSquare;
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
