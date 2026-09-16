export const recipesSeed = [
  {
    id: 1,

    title: 'Lasanha Clássica Bolonhesa',

    category: 'Massas',

    time: '45 min',

    difficulty: 'Fácil',

    portions: '4 porções',

    rating: '4,9',

    author: 'Helena Rizzo',

    image:
      'https://images.unsplash.com/photo-1574894709920-11b28e7367a9?auto=format&fit=crop&w=900&q=80',

    ingredients: [
      '500g de massa de lasanha',
      '400g de carne moída',
      '1 lata de molho de tomate',
      '200g de queijo muçarela',
      '1 cebola picada'
    ],

    steps: [
      'Prepare o molho bolonhesa.',
      'Cozinhe a massa conforme a embalagem.',
      'Monte as camadas com molho, massa e queijo.',
      'Leve ao forno até gratinar.'
    ]
  },

  {
    id: 2,

    title: 'Nhoque de Mandioquinha ao Pesto',

    category: 'Massas',

    time: '45 min',

    difficulty: 'Fácil',

    portions: '4 porções',

    rating: '4,8',

    author: 'Helena Rizzo',

    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',

    ingredients: [
      '600g de mandioquinha',
      '1 xícara de farinha',
      '1 ovo',
      'Manjericão fresco',
      'Parmesão'
    ],

    steps: [
      'Cozinhe e amasse a mandioquinha.',
      'Misture com farinha e ovo.',
      'Modele os nhoques.',
      'Sirva com pesto e parmesão.'
    ]
  },

  {
    id: 3,

    title: 'Salada de Quinoa Colorida',

    category: 'Saladas',

    time: '25 min',

    difficulty: 'Fácil',

    portions: '2 porções',

    rating: '4,7',

    author: 'Bia Martins',

    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',

    ingredients: [
      '1 xícara de quinoa',
      'Tomate-cereja',
      'Pepino',
      'Cenoura',
      'Azeite e limão'
    ],

    steps: [
      'Cozinhe a quinoa.',
      'Corte os vegetais.',
      'Misture tudo em uma tigela.',
      'Tempere com azeite e limão.'
    ]
  },

  {
    id: 4,

    title: 'Contra Filé na Manteiga de Alho',

    category: 'Carnes',

    time: '25 min',

    difficulty: 'Fácil',

    portions: '2 porções',

    rating: '4,8',

    author: 'Caio Ferreira',

    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',

    ingredients: [
      '2 bifes de contra filé',
      '2 colheres de manteiga',
      '3 dentes de alho',
      'Sal',
      'Pimenta-do-reino'
    ],

    steps: [
      'Tempere os bifes.',
      'Sele os dois lados em frigideira quente.',
      'Adicione manteiga e alho.',
      'Regue a carne e sirva.'
    ]
  },

  {
    id: 5,

    title: 'Cookies de Chocolate Crocantes',

    category: 'Doces',

    time: '30 min',

    difficulty: 'Fácil',

    portions: '12 unidades',

    rating: '4,9',

    author: 'Clara Torres',

    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',

    ingredients: [
      '2 xícaras de farinha',
      '1/2 xícara de açúcar',
      '100g de manteiga',
      '1 ovo',
      'Chocolate picado'
    ],

    steps: [
      'Misture manteiga e açúcar.',
      'Adicione ovo e farinha.',
      'Incorpore o chocolate.',
      'Asse até dourar as bordas.'
    ]
  },

  {
    id: 6,

    title: 'Creme Brûlée',

    category: 'Doces',

    time: '50 min',

    difficulty: 'Médio',

    portions: '4 porções',

    rating: '4,6',

    author: 'Ana Souza',

    image:
      'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=900&q=80',

    ingredients: [
      '500ml de creme de leite',
      '5 gemas',
      '1/2 xícara de açúcar',
      'Baunilha'
    ],

    steps: [
      'Aqueça o creme com baunilha.',
      'Misture as gemas com açúcar.',
      'Asse em banho-maria.',
      'Finalize com açúcar caramelizado.'
    ]
  }
];

export const categories = [
  {
    name: 'Massas',
    icon: '🍝'
  },

  {
    name: 'Doces',
    icon: '🍰'
  },

  {
    name: 'Carnes',
    icon: '🥩'
  },

  {
    name: 'Saladas',
    icon: '🥗'
  },

  {
    name: 'Bebidas',
    icon: '🥤'
  },

  {
    name: 'Lanches',
    icon: '🍔'
  }
];