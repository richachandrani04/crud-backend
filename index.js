const express = require('express')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req,res) => {
    res.send("This is my home page!")
})

app.get('/about',(req,res)=> {
    res.send("<h1>This is my about page!</h1>")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});