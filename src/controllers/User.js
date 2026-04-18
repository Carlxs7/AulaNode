
const FakeUsers = [
    {
        name: 'Cleitin',
        email: 'cleitin@mail.com'
    },
];

function ListUser(req, res) {
    res.json(fakeUsers);
}

function CreateUser(req, res) {
    const {name, email} = req.body;
    fakeUsers.push({name, email});
    res.json({
        message: "Usuario criado com sucesso",
    });
}

    
module.exports = {
    CreateUser,
    ListUser
}