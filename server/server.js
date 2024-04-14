require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware')

//connecting to database
connectDb();

//Serve static files from the public directory
app.use(express.static('public'))

app.get('/AWS', (req, res) => {
    res.status(200).json({ message: 'Hello AWSCC'});

})

//Post routes:
const postRouter = require('./routers/postRouter')
app.use('/posts', postRouter)

//Use Error middleware
app.use(errorHandler)

app.listen(8080, () => {
    console.log('Server is running in port 8080');
})
