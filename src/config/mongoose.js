import mongoose from "mongoose";

const urlAltas = "mongodb+srv://hahuudev:hahu2k2@cluster0.q2wneqc.mongodb.net/hPhim?retryWrites=true&w=majority";
const urlCompas = "mongodb+srv://hahuudev:hahuu2k2@cluster0.q2wneqc.mongodb.net/test";

export const connectDB = async () => {
    try {
        await mongoose.connect(urlAltas, {
            useUnifiedTopology: true,
            useNewUrlParser: true, 
        });
    } catch (error) {
        console.log(error);
    }
};
