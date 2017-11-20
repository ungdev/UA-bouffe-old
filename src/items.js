/* Crêpes Sucrées */

const crepeMiel = {
  id        : 'crepe-miel',
  name      : 'Crêpe Miel',
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

const crepeConfitureFruitRouge = {
  id        : 'crepe-confiture-fruits-rouges',
  name      : 'Crêpe Confiture Fruits rouges',
  price     : 50,
  lowerPrice: 50,
  category  : 'crepes'
};

const crepeCaramel = {
  id        : 'crepe-caramel',
  name      : 'Crêpe Caramel beurre salé',
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

const croquePoulet = {
  id        : 'croque-poulet',
  name      : 'Croque poulet-curry',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
};

const croqueMozza = {
  id        : 'croque-mozza',
  name      : 'Croque poivrons-mozza-sauce tomate',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
};


/* Cannettes */

const iceTea = {
  id        : 'ice-tea',
  name      : 'Ice-Tea',
  price     : 60,
  lowerPrice: 60,
  category  : 'cannettes'
};

const coca = {
  id        : 'coca',
  name      : 'Coca-cola',
  price     : 60,
  lowerPrice: 60,
  category  : 'cannettes'
};

const oasisTropical = {
  id        : 'oasis-tropical',
  name      : 'Oasis tropical',
  price     : 60,
  lowerPrice: 60,
  category  : 'cannettes'
};

const sprite = {
  id        : 'sprite',
  name      : 'Sprite',
  price     : 60,
  lowerPrice: 60,
  category  : 'cannettes'
};

const oasisPcf = {
  id        : 'oasis-pcf',
  name      : 'Oasis Pomme-Cassis-Framboise',
  price     : 60,
  lowerPrice: 60,
  category  : 'cannettes'
};

const orangina = {
  id        : 'orangina',
  name      : 'Orangina',
  price     : 60,
  lowerPrice: 60,
  category  : 'cannettes'
};


/* Promotions */

const promo3Croques = {
  id        : 'promo-3croques',
  name      : '3 Croques',
  price     : 200,
  lowerPrice: 200,
  items     : [
    [ croqueJambonFromage, croquePoulet, croqueMozza ],
    [ croqueJambonFromage, croquePoulet, croqueMozza ],
    [ croqueJambonFromage, croquePoulet, croqueMozza ]
  ],
  category: 'croques'
};


export {
  crepeNutella,
  crepeConfitureFruitRouge,
  crepeCaramel,
  crepeMiel,
  croqueJambonFromage,
  croquePoulet,
  croqueMozza,
  iceTea,
  coca,
  oasisTropical,
  sprite,
  oasisPcf,
  orangina,
  promo3Croques
};
