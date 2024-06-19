require('dotenv').config();
const express = require('express');
const errorMiddleware = require('./middlewares/error-middleware');
const notFoundMiddleware = require('./middlewares/not-found');

const app = express();

app.use("/login", (req, res, next) => {});

app.use('/comment',(req,res)=> {
    res.status(200).json({msg: 'Comment1...'})
})

app.use('/comment02', (req, res, next) => {
  res.status(200).json({ msg: 'created comment 02' });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

let port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server is on port', port));
