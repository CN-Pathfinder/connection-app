const express = require('express');
const app = express();
const path = require('path')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false, 
    useUnifiedTopology: true
}).then(()=>console.log("connected to mongoDB"));


app.use(express.urlencoded({extended: true}));
// parses the url-encoded bodies(that are sent by html forms)

app.use(express.json());
// parses the json bodies(that are sent by api clients) (don't need bodyparser anymore)

const registerRouter = require('./routes/registerrouter')
const loginRouter = require('./routes/loginrouter')



app.set('/login', loginRouter);
app.set('/register', registerRouter);

app.get('/', (req, res) => {
    res.send({ someText: "hello" });
});
// 


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Listening on the port")
});