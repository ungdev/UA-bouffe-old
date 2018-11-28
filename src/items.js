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

const croqueNutella = {
  id        : 'croque-nutella',
  name      : 'Croque Nutella',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
}

const croqueTroisFromage = {
  id        : 'croque-trois-fromage',
  name      : 'Croque Trois Fromage',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
}

const croqueSaucisseFromage = {
  id        : 'croque-saucisse-fromage',
  name      : 'Croque Saucisse Fromage',
  price     : 100,
  lowerPrice: 100,
  category  : 'croques'
}


/* canettes */


const iceTea = {
  id        : 'ice-tea',
  name      : 'Ice Tea',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const coca = {
  id        : 'coca-cola',
  name      : 'Coca Cola',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const oasisTropical = {
  id        : 'oasis-tropical',
  name      : 'Oasis Tropical',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const oasisOrange = {
  id        : 'oasis-orange',
  name      : 'Oasis Orange',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const sprite = {
  id        : 'sprite',
  name      : 'Sprite',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const oasisPCF = {
  id        : 'oasis-PCF',
  name      : 'Oasis Pomme Cassis Framboise',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const orangina = {
  id        : 'orangina',
  name      : 'Orangina',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const sevenUp = {
  id        : 'seven-up',
  name      : '7Up',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const cocaCherry = {
  id        : 'coca-cherry',
  name      : 'Coca Cherry',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const cocaZero = {
  id        : 'coca-zero',
  name      : 'Coca Zéro',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const schweppesAgrum = {
  id        : 'schweppes-agrum',
  name      : 'Schweppes Agrum',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const minuteMaidPomme = {
  id        : 'minute-maid-pomme',
  name      : 'Minute Maid Pomme',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

const fantaOrange = {
  id        : 'fanta-orange',
  name      : 'Fanta Orange',
  price     : 60,
  lowerPrice: 60,
  category  : 'canettes',
  noPrep    : true,
};

/* Goodies */

const tshirtUA = {
  id        : 'tshirt-UA',
  name      : 'TshirtUA',
  price     : 1000,
  lowerPrice: 1000,
  category  : 'general',
  noPrep    : true,
};

const cableSeptMetres = {
  id        : 'cable-sept-metres',
  name      : 'Câble Ethernet (7m)',
  price     : 1000,
  lowerPrice: 1000,
  category  : 'general',
  noPrep    : true,
};

const cableCinqMetres = {
  id        : 'cable-cinq-metres',
  name      : 'Câble Ethernet (5m)',
  price     : 700,
  lowerPrice: 700,
  category  : 'general',
  noPrep    : true,
};

/* Promotions */

const promo3Croques = {
  id        : 'promo-3croques',
  name      : '3 Croques',
  price     : 200,
  lowerPrice: 200,
  items     : [
    [ croqueSaucisseFromage, croqueTroisFromage, croqueNutella ],
    [ croqueSaucisseFromage, croqueTroisFromage, croqueNutella ],
    [ croqueSaucisseFromage, croqueTroisFromage, croqueNutella ]
  ],
  category: 'croques'
}

const boissonCanette = {
  id        : 'boisson-canette',
  name      : 'Canette',
  price     : 100,
  lowerPrice: 100,
  category  : 'canettes'
};

/*const promo3CroquesPlusCanette = {
  id        : 'promo-3croquesCanette',
  name      : '3 Croques + Canette',
  price     : 300,
  lowerPrice: 300,
  items     : [
    [ croqueJambonFromage, croqueTomateMozza ],
    [ croqueJambonFromage, croqueTomateMozza ],
    [ croqueJambonFromage, croqueTomateMozza ],
    [ boissonCanette ]
  ],
  category: 'croques'
}*/

export {
  //tshirtUA,
  //cableCinqMetres,
  //cableSeptMetres,
  orangina,
  sevenUp,
  coca,
  cocaCherry,
  cocaZero,
  sprite,
  oasisPCF,
  schweppesAgrum,
  iceTea,
  minuteMaidPomme,
  fantaOrange,
  oasisOrange,
  oasisTropical,
  //crepeSucre,
  //crepeConfiture,
  //crepeNutella,
  //crepeMiel,
  //croqueJambonFromage,
  croqueNutella,
  croqueTroisFromage,
  croqueSaucisseFromage,
  //croqueTomateMozza,
  promo3Croques,
  //promo3CroquesPlusCanette,
};