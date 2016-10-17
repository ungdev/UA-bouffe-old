const crepe = {
  id        : 'crepe',
  name      : 'Crêpe',
  price     : 50,
  lowerPrice: 50
};

const fleur = {
  id        : 'fleur',
  name      : 'Fleur',
  price     : 50,
  lowerPrice: 20
};

const promoFC = {
  id        : 'fleurcrepe',
  name      : 'Fleur + Crepe',
  price     : 50,
  lowerPrice: 50,
  items     : [ [ fleur, crepe ] ]
};

const promoDouble = {
  id: 'double',
  name: 'Double Item',
  price: 50,
  lowerPrice: 50,
  items: [ [ fleur, fleur ], [ crepe, crepe ] ]
};

export { crepe, fleur, promoFC, promoDouble };
