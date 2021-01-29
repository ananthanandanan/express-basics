const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');


const app = express();

//app.use(logger);

//Body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//endpoint and set a static folder.

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/member'));


//Set env
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));