function player_gameboard() {
  const player_board = document.getElementById('player-board');
  const container = document.getElementById('container');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const createSquares = document.createElement('div');
      createSquares.classList.add('player-square');
      player_board.appendChild(createSquares);
    }
  }
  container.appendChild(player_board);
}

export { player_gameboard };
