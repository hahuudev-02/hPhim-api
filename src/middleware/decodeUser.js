import admin from "../config/firebase.js";
export const decodeUser = async (req, res, next) => {
    if (!req.headers.token) return res.json("fail to admin");
    const token = await req.headers.token.split(" ")[1];
    try {
        const decode = await admin.auth().verifyIdToken(token);
        if (decode) {
            return next();
        }
        return res.json("fail to admin");
    } catch (error) {
        return res.status(304).json(error);
    }
};
