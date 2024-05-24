const mongoose = require("mongoose");

//!creating a database 
mongoose.connect("mongodb://localhost:27017/DynamicSite",{family:4})
.then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})