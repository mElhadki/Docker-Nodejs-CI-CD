const express = require('express');
const app = express();
const Data = require('./data.json');
const config = require('./config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//get all data

app.get("/",(req,res)=>{

    res.status(200).json(Data);
  
})


//get data with id 

app.get("/:id",async (req,res)=>{

    const user = await Data.find((user) => user.id === req.params.id);
    res.status(200).send(user);
})


app.listen(config.API_PORT, () => {
    console.log(`app listening at http://localhost:${config.API_PORT}`)
  })

module.exports = app;
