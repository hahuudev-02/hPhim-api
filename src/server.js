import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { connectDB } from "./config/mongoose.js";

const domain = "localhost";
const PORT = 8017;

const app = express();
app.use(cors());

if (connectDB()) {
    app.get("/", (req, res) => {
        res.send("hello world");
    });

    router(app);

    app.listen(PORT, () => {
        console.log(`Em đã nắng nghe ${PORT}`);
    });
}





// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;

// const user = new Schema({
//     name: {type: String, maxLength: 100, required: true},
//     slug: {type: String, maxLength: 100},
//     blogs: {type: Array, default: [], ref: "blog"},

//     createdAt: {type: Date, default: Date.now},
//     updatedAt: {type: Date, default: Date.now}
// })


// const blog = new Schema({
//     userId: {type: String, required: true, ref: "user"},
//     chapter: {type: String, maxLength: 100},
//     blogLink: {type: String, maxLength: 100},
    
//     createdAt: {type: Date, default: Date.now},
//     updatedAt: {type: Date, default: Date.now}
// })

// const apigetUser = [
//     { 
//         _id: 'user1',
//         name: 'nguyễn văn huy',
//         blog: [
//             { 
//                 _id: 'blog1',
//                 userId: 'user1',
//                 name: 'blog1'
//             },
//             { 
//                 _id: 'blog2',
//                 userId: 'user1',
//                 name: 'blog2'
//             },
//         ]
//     },
//     { 
//         _id: 'user2',
//         name: 'hà văn huy',
//         blog: [
//             { 
//                 _id: 'blog4',
//                 userId: 'user2',
//                 name: 'blog4'
//             },
//             { 
//                 _id: 'blog6',
//                 userId: 'user2',
//                 name: 'blog6'
//             },
//         ]
//     },
// ]
