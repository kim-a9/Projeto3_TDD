import app from './infra/server/server';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
