const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer') // HERE
const mongoose = require('mongoose')
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(multer().any());
app.use('/', route);

mongoose.connect("mongodb+srv://debjani97:debjani97@cluster0.mxihy.mongodb.net/myProject-5?authSource=admin&replicaSet=atlas-12zga8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true })
    .then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});