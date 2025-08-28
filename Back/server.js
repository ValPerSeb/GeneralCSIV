const express = require('express');
const app = express();
const port = 8084;

app.get('/', (req, res) => {
    res.send('Servidor corriendo en el puerto 8084');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

let users = [
    {
        "id": 1, "nombre": "Sebastian"
    },
    { "id": 2, "nombre": "Camila" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) =>{
    const user = users.find(u => u.id == req.params.id);
    user ? res.json(user) : res.status(404).send('Usuario no encontrado');

    /*if(user == req.param.id){
    console.log('Usuario encontrado')
    }else{
        res.status(404).send();
    }*/
});