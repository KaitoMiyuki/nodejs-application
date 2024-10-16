import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import express, { json, urlencoded } from "express";
import cors from 'cors';
import connectDB from "./db/db.js";
import shopRouter from "./routes/shop.routes.js";

configDotenv()

const app = express();

// CORS to prevent unauthorized access

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));

app.use(urlencoded({
    extended: true
}))

app.use(cookieParser())

app.use(express.static("public"))

app.use(json())

// connect DB

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("server is running on: ", 5000);
    })
}).catch((error) => {
    console.error(error)
})

app.get('/', (req, res) => {
    res.send(`<a
        href='https://stackabuse.com/handling-cors-with-node-js/'
        target='_blank'
        >
        https://stackabuse.com/handling-cors-with-node-js/
    </a>`)
})

app.use("/api/shop", shopRouter)
