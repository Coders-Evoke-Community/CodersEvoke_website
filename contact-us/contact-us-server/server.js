require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/userRouter')
const submissionRouter = require('./routes/submissionRouter')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/coders-evoke', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const PORT = process.env.PORT || 8080;

// Use  Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/submisson', submissionRouter);

// Starting the server
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}. http://localhost:${PORT}`);
});