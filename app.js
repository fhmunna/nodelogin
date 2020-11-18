const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In another Middleware');
    res.send('<h1>Hello From expressJS!!</h1>');
    next();
});

app.use((req, res, next) => {
    console.log('Hello');
});

app.listen(3000);