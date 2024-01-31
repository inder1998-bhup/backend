// require('dontnv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
        path: './env'
    })


connectDB()
































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