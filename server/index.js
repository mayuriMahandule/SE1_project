import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import users from './routes/users.js';


const app = express();

app.use('/users', users);

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())


const CONNECTION_URL = 'mongodb+srv://seOneProject:seOneProject123@seoneproject.yu3dx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`servr running on port ${PORT}`)))
.catch((error) => console.log(`error running server ${error}`))
