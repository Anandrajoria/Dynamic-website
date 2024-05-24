const express = require('express');
const app = express();
const path = require("path")
const hbs = require("hbs")
require('./database/conn');
const User = require("./model/userMessage");
const { expr } = require('jquery');

app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = process.env.port || 3000

//*setting the path for static website in public folder 
const staticPath = path.join(__dirname,"../public")
const templatepath = path.join(__dirname,"../template/views")
const partialpath = path.join(__dirname,"../template/partials")

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticPath))
app.set("view engine","hbs");
app.set('views',templatepath);
hbs.registerPartials(partialpath);



app.get("/",(req,res)=>{
    res.render("index")
})



app.post('/contact',async(req,res)=>{
    try{
        // res.send(req.body)
        const userData = new User(req.body)
        await userData.save();
        res.status(201).render("index")
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})