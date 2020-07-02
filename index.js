const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({extended: true}));
// parses the url-encoded bodies(that are sent by html forms)

app.use(express.json());
// parses the json bodies(that are sent by api clients)

app.get('/about', (req, res) => {
    res.send({ someText: "hello" });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);