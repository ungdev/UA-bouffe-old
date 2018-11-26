/* Crêpes Salées */


/* Crêpes Sucrées */

const crepeSucre = {
  id        : 'crepe-sucre',
  name      : 'Crêpe Sucre',
  price     : 50,
  lowerPrice: 50,
  category  : 'crepes'
};

const crepeNutella = {
  id        : 'crepe-nutella',
  name      : 'Crêpe Nutella',
  price     : 50,
  lowerPrice: 50,
  category  : 'crepes'
};

const crepeConfiture = {
  id        : 'crepe-confiture',
  name      : 'Crêpe Confiture',
  price     : 50,
  lowerPrice: 50,
  category  : 'crepes'
};

const crepeMiel = {
  id        : 'crepe-miel',
  name      : 'Crêpe Miel',
  price     : 50,
  lowerPrice: 50,
  category  : 'crepes'
};

/* Croques-Monsieur */


const croqueJambonFromage = {
  id        : 'croque-jambon-fromage',
  name      : 'Croque Jambon Fromage',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
};

const croqueTomateMozza = {
  id        : 'croque-tomate-mozza',
  name      : 'Croque Tomate Mozza',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
};


/* canettes */


const iceTea = {
  id        : 'ice-tea',
  name      : 'Ice Tea',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const coca = {
  id        : 'coca-cola',
  name      : 'Coca Cola',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const oasisTropical = {
  id        : 'oasis-tropical',
  name      : 'Oasis Tropical',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const oasisOrange = {
  id        : 'oasis-orange',
  name      : 'Oasis Orange',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const sprite = {
  id        : 'sprite',
  name      : 'Sprite',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const oasisPCF = {
  id        : 'oasis-PCF',
  name      : 'Oasis Pomme Cassis Framboise',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const orangina = {
  id        : 'orangina',
  name      : 'Orangina',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const sevenUp = {
  id        : 'seven-up',
  name      : '7Up',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const cocaCherry = {
  id        : 'coca-cherry',
  name      : 'Coca Cherry',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const cocaZero = {
  id        : 'coca-zero',
  name      : 'Coca Zéro',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const schweppesAgrum = {
  id        : 'schweppes-agrum',
  name      : 'Schweppes Agrum',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const minuteMaidPomme = {
  id        : 'minute-maid-pomme',
  name      : 'Minute Maid Pomme',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

const fantaOrange = {
  id        : 'fanta-orange',
  name      : 'Fanta Orange',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes'
};

/* Goodies */

const tshirtUA = {
  id        : 'tshirt-UA',
  name      : 'TshirtUA',
  price     : 1000,
  lowerPrice: 1000,
  category  : 'general'
};

const cableSeptMetres = {
  id        : 'cable-sept-metres',
  name      : 'Câble Ethernet (7m)',
  price     : 1000,
  lowerPrice: 1000,
  category  : 'general'
};

const cableCinqMetres = {
  id        : 'cable-cinq-metres',
  name      : 'Câble Ethernet (5m)',
  price     : 700,
  lowerPrice: 700,
  category  : 'general'
};

/* Promotions */

const promo3Croques = {
  id        : 'promo-3croques',
  name      : '3 Croques',
  price     : 200,
  lowerPrice: 200,
  items     : [
    [ croqueJambonFromage, croqueTomateMozza ],
    [ croqueJambonFromage, croqueTomateMozza ],
    [ croqueJambonFromage, croqueTomateMozza ]
  ],
  category: 'croques'
}

export {
  tshirtUA,
  cableCinqMetres,
  cableSeptMetres,
  orangina,
  sevenUp,
  coca,
  cocaCherry,
  cocaZero,
  schweppesAgrum,
  iceTea,
  minuteMaidPomme,
  fantaOrange,
  oasisOrange,
  oasisTropical,
  crepeSucre,
  crepeConfiture,
  crepeNutella,
  crepeMiel,
  croqueJambonFromage,
  croqueTomateMozza,
  promo3Croques,
};