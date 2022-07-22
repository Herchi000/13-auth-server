const express = require('express');
const cors = require('cors');
require('dotenv').config();

//console.log(process.env)

const app = express();

app.use(express.static('public'))


app.use(cors());


app.use( express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})