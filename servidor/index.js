const express = require('express');
const app = express();
const port = 3031;

const produtos = [
  {
    id: '1',
    produto: 'Bola',
    descricao: 'Bola média',
    img: 'https://imagepng.org/wp-content/uploads/2017/10/bola.png',
    botao: 'Comprar bola',
  },
  {
    id: '2',
    produto: 'Chuteira',
    descricao: 'Chuteira preta',
    img: 'https://rogerstenis.vteximg.com.br/arquivos/ids/2574818-505-505/1000414281_1.jpg?v=636881799375300000',
    botao: 'Comprar chuteira',
  },
  {
    id: '3',
    produto: 'Caneleira',
    descricao: 'Caneleira amarela',
    img: 'https://images.tcdn.com.br/img/img_prod/628041/caneleira_alyki_poker_adulto_10689_1_20200727161314.png',
    botao: 'Comprar caneleira',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/produtos', (req, res) => {
  res.send(produtos);
})

app.get('/produtos/:id', (req, res) => {
  const produto = produtos.filter((produto) => produto.id == req.params.id);
  res.send(produto[0]);
});

app.listen(port, '0.0.0.0', () => {
  console.log('Servidor online');
});