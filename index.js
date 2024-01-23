const mongoose = require('mongoose') ;
const express = require('express') ;
const port = 3000 ;
const app = express() ;
const connection = require('./db/db')
const Routes = require('./routes/routes') ;
const cors = require("cors") ;
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

app.use(express.json()) ;
app.use(cors()) ;
app.get('/', (req,res) => {
    res.send("hello Express") ;
})

connection() ;

app.use('/', Routes )

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
})


