function Ship(length) {
  let hitsTaken = 0;
  let sunk = false;

  const getHit = () => hitsTaken++;

  const checkHit = () => hitsTaken;

  const isSunk = () => {
    return length === hitsTaken ? (sunk = true) : (sunk = false);
  };

  return { length, getHit, checkHit, isSunk };
}

export { Ship };
