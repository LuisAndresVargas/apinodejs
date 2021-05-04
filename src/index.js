const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//route
app.use('/api/users',require('./routes/users'));
app.use('/api/usersExist',require('./routes/usersExist'));

//starting the serve

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})
