const fakeUsers = [
    {
        id:1,
        name: 'Cleitin',
        email: 'cleitin@mail.com'
    }
];

async function ListUser(req, res) {
    res.send(fakeUsers);
}

async function FindUser(req, res) {
    const {id} = req.params;
    const user = fakeUsers.find(user => Number(user.id) === Number(id));

    if(!user) {
        return res.status(404).json({error: "Not found"});
    }

    return res.json(user);
}

function CreateUser(req, res) {
    const {name, email} = req.body;
    const id = fakeUsers.length + 1;
    fakeUsers.push({id, name, email});
    res.json({
        message: "Usuario cadastrado com sucesso!"
    });
}

function UpdateUser(req, res) {
    const {id} = req.params;
    const {name, email} = req.body;

    fakeUsers.forEach(user => {
        if(Number(user.id) === Number(id)) {
            user.name = name || user.name;
            user.email = email || user.email;
        }
    });

    res.send({
        message: "Usuario atualizado com sucesso!"
    });
}

// let usuarioEncontrado = fakeUsers.find(user => Number(user.id) === Number(id));
//  usuarioEncontrado.name = name || usuarioEncontrado.name
//  usuarioEncontrado.email = email || usuarioEncontrado.email

module.exports = {
    ListUser,
    FindUser,
    CreateUser,
    UpdateUser
}