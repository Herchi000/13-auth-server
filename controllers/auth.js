const { response} = require('express');


const crearUsuario = (req, res = response) => {

    //console.log(req.body);

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    })
}



const loginUsuario = (req, res = response) => { //el response es unicamente para darle tipado al res


    const { email, password } = req.body;
    console.log(email, password);

    return res.json({
        ok: true,
        msg: 'Login de usuario'
    })
}

const revalidarToken = (req, res = response) => {

    return res.json({
        ok: true,
        msg: 'Renew'
    })
}

module.exports = {
    crearUsuario, loginUsuario, revalidarToken
}