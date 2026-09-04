const express = require('express');
const cors = require('cors');

const app = express();

const users = []

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
    res.json({ users });
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const user = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    res.json({
        message: 'User registered successfully',
        user: user
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find()
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});