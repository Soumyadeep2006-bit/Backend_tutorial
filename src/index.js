
import dotenv from "dotenv"

dotenv.config()

import connectDB from "./db/index.js"
import {app} from "./app.js"


connectDB()                                            
.then(()=>{                                                                //If DB connected → start Express server  
    app.listen(process.env.PORT||8000,()=>{                                 //  If DB failed → handle error
    console.log(`Server is listening at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed",err)
})