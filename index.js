const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')
app.use(cookieParser());
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



app.use('/login', loginRouter);
app.use('/register', registerRouter);

//any requests beginning with /login will be handled by login Router
//any requests beginning with /register will be handled by register Router


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
//here we telling the app to serve the static build of the react app. It will redirect all requests to the front end-react


const PORT = process.env.PORT || 5000;

//environment variable - if PORT doesn't exist, use 5000(for when running locally)

app.listen(PORT, ()=>{
    console.log("Listening on the port")
});


// in index.js need to set the mongoose database connection
//define the server port
//any other server settings