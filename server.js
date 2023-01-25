const express = require('express');

const connectDB = require('./config/db');
// const http = require("http");

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

// app.get('/', (req, res) => {res.send('API Running');});
const PORT = process.env.PORT || 5000

app.listen(5000, () => console.log(`Server started on port ${5000}`));


// *const express = require("express");
// const app = express();
 