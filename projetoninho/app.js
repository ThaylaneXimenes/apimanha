const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Habilita o uso de JSON para as solicitações

// Rota de exemplo para uma API
app.get('/api/exemplo', (req, res) => {
  const data = {
    mensagem: 'Esta é uma resposta da API de exemplo',
    data: new Date()
  };
  res.json(data);
});

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
