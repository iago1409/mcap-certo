const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/law-firm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Certifique-se de que o caminho está correto

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public'))); // Certifique-se de que esta linha está presente

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
