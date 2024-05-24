const express = require('express');
const path = require('path');
const app = express();

// Configurar EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Certifique-se de que o caminho esteja correto

// Configurar pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Rotas para as outras páginas
app.get('/page1', (req, res) => {
    res.render('page1', { title: 'Page 1' });
});

app.get('/page2', (req, res) => {
    res.render('page2', { title: 'Page 2' });
});

app.get('/page3', (req, res) => {
    res.render('page3', { title: 'Page 3' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
