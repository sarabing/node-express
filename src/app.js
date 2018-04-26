const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const router = require('./router/index');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('static'));

for(let i in router){
    app.use(`/${i}`,router[i]);
}

app.listen(3000);

