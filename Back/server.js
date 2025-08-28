const express = require('express');
const userDTO = require('./DTO/userDTO');
const { getUsers } = require('./DATA/userStorage');
/*const { instanceToPlain } = require('class-transformer');*/

const app = express();
const port = 8084;

app.get('/', (req, res) => {
    res.send('Servidor corriendo en el puerto 8084');
});

/*let users = [
    {"id": 1, "name": "Sebastian"},
    { "id": 2, "name": "Camila" }
];*/

app.get('/users', (req, res) => {
    const users = getUsers().map(user => new userDTO(user.id, user.name, user.password));
    /*const userTransformed = instanceToPlain(users);*/
    res.json(users);
});

// Obtener un usuario por ID
app.get('/users/:id', (req, res) =>{
    const userById = getUsers().find(user => user.id === parseInt(req.params.id));
    userById ? res.json(userById) : res.status(404).send('Usuario no encontrado');

    /*if(user == req.param.id){
    console.log('Usuario encontrado')
    }else{
        res.status(404).send();
    }*/
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});