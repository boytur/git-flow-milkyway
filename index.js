const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        const user = ['john', 'doe', 'jane', 'doe'];
        res.status(200).json({
            message: 'Hello World',
            users: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

app.post('/user', (req, res) => {
    try {
        const user = req.body;

        if (!user || !Array.isArray(user)) {
            return res.status(400).json({
                success: false,
                message: 'User required!'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User created successfully',
            user: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});


module.exports = app;
