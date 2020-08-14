const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('Inside first middleware');
//     next();
// });
// app.use((req, res, next) => {
//     console.log('Inside second middleware');
//    res.send('<p> Assignment solved...almost!</p>')
// });

app.use('/users',(req, res, next) => {
    console.log('/users middleware');
    res.send('<p> middleware that handles just /users</p>');
});

app.use('/',(req, res, next) => {
    console.log('/ middleware');
    res.send('<p> middleware that handles just /</p>');
});


app.listen(3000);
