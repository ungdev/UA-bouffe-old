const crepe = {
  id        : 'crepe',
  name      : 'Crêpe',
  price     : 50,
  lowerPrice: 0
};

const fleur = {
  id        : 'fleur',
  name      : 'Fleur',
  price     : 50,
  lowerPrice: 0
};

const caillou = {
  id        : 'caillou',
  name      : 'Caillou',
  price     : 100,
  lowerPrice: 0
};

const promoFC = {
  id        : 'fleurcrepe',
  name      : 'Fleur + Crepe',
  price     : 50,
  lowerPrice: 0,
  items     : [ [ fleur, caillou ], [ crepe ] ]
};

export { crepe, fleur, promoFC };
