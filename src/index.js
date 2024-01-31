// require('dontnv').config({path: './env'})
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
        path: './env'
    })


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server started on port ${process.env.PORT}`);
    })

    app.on("error", (err)=>{
        console.log("Coming error", err);
        throw err;
    })
})
.catch((error) => {
    console.log("Mongodb Connection failed:", error);
})






























/*
const app = express();
//iffies
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("Error", err);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
        throw err
    }
})()
*/