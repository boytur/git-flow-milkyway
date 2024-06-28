const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try {
        const user = ['john', 'doe', 'jane', 'doe']
        res.status(200).json({
            message: 'Hello World',
            users: user
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
})
app.listen(3000, () => {
    console.log('App listening on port 3000');
});

module.exports = app; 