const express = require('express');

const app = express();


const users = []
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users", (req, res) => {
    res.json({ users })

})


app.listen(3000, () => {
    console.log('Server ishlavotti');
});


app.post("/users", (req, res) => {
    console.log(req.body);

    users.push(req.body);
    res.json({
        message: "User created",
        user: req.body
    });
});