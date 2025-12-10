const express = require('express');
const app = express();
const port = 3000;

const filmes = [
  { id: 1, nome: 'O Senhor dos Anéis: A Sociedade do Anel', ano: 2001 },
  { id: 2, nome: 'Matrix', ano: 1999 },
  { id: 3, nome: 'Inception', ano: 2010 }
];

app.get('/api/filmes', (req, res) => {
  res.json(filmes);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
