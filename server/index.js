import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import users from './routes/userSignUp.js';
import products from './routes/products.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', users);
app.use('/products', products);

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
const CONNECTION_URL = 'mongodb+srv://seOneProject:seOneProject123@seoneproject.yu3dx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

// mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology: true})
// .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
// .catch((error) => console.log(`error running server ${error}`))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))