const express = require("express")
const mongoose = require("mongoose")
const dotenv= require("dotenv")
 const cors = require("cors")

const routes= require("./router/Login_router")


dotenv.config()

const app= express()
app.use(cors());
app.use(express.json()); 

const PORT=process.env.PORT
const MONGO_URL = process.env. MONGO_URI;
 
    app.use("/api",routes)

    mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true })

    .then(()=>{
        console.log("connected to mongodb")
        app.listen(PORT,()=>{
            console.log(`server in on PORT:${PORT}`);
    })   
    })
    .catch((error)=>{
        console.error("Error cnnection to mongoDB",error)
        
    })

   

 