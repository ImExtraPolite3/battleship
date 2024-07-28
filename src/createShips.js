import { Ship } from './ships';

function createShips() {
  const XlargeShip = Ship(5);
  const largeShipOne = Ship(3);
  const largeShipTwo = Ship(3);
  const mediumShipOne = Ship(2);
  const mediumShipTwo = Ship(2);
  const mediumShipThree = Ship(2);
  const smallShipOne = Ship(1);
  const smallShipTwo = Ship(1);
  const smallShipThree = Ship(1);
  const smallShipFour = Ship(1);

  return {
    XlargeShip,
    largeShipOne,
    largeShipTwo,
    mediumShipOne,
    mediumShipTwo,
    mediumShipThree,
    smallShipOne,
    smallShipTwo,
    smallShipThree,
    smallShipFour,
  };
}

export { check };
