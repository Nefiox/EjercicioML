const express = require('express');
const app = express();
const PORT = 3000;
// OPCIÓN 1: USANDO PATH Y REFERENCIANDO
// const path = require('path');
// const publicPath = path.join(__dirname, '/public')

// app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/home.html'))
// });

// OPCIÓN 2: SIN USAR PATH
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('/home.html', {root: 'views'});
    
});
app.get('/registro', (req, res) => res.sendFile('/register.html', {root: 'views'}));


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));