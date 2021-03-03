const tags = {
  'node.js': {
    name: 'Node.js',
    color: '#43d943',
  },
  express: {
    name: 'Express',
    color: '#949494',
  },
  'knex.js': {
    name: 'Knex.js',
    color: '#d97c43',
  },
  mysql: {
    name: 'MySQL',
    color: '#4843d9',
  },
  'react.js': {
    name: 'React.js',
    color: '#434ad9',
  },
  axios: {
    name: 'Axios',
    color: '#8943d9',
  },
  sequelize: {
    name: 'Sequelize',
    color: '#4398d9',
  },
  html: {
    name: 'HTML',
    color: '#d96e43',
  },
  css: {
    name: 'CSS',
    color: '#438ed9',
  },
  javascript: {
    name: 'JavaScript',
    color: '#d9d743',
  },
};

const projects = [
  {
    name: 'NewsCards',
    type: 'back-end',
    tags: [tags['node.js'], tags['express'], tags['knex.js'], tags['mysql']],
    description:
      'Uma API de "cartões" de notícias com upload de imagem. O objetivo principal é estudar e aplicar o que eu já aprendi.',
    url: 'https://github.com/empix/newscards-backend',
    wip: false,
  },
  {
    name: 'NewsCards',
    type: 'front-end',
    tags: [tags['react.js'], tags['axios']],
    description:
      'Uma interface web para consumir a API que fiz e aproveitar para estudar React.js',
    url: 'https://github.com/empix/newscards-frontend',
    wip: false,
  },
  {
    name: 'Pizzeria',
    type: 'back-end',
    tags: [tags['node.js'], tags['express'], tags['mysql']],
    description:
      'O objetivo deste projeto é fazer uma API utilizando apenas o driver mysql2 para aplicar meus conhecimentos de SQL.',
    url: 'https://github.com/empix/pizzeria-backend',
    wip: false,
  },
];
