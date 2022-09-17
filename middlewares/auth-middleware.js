import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";


const userAuth = async (req, res, next) => {
    const { authorization } = req.headers ;
    if(authorization && authorization.startsWith("Bearer")) {
        try {
            // get token from header
            const token = authorization.split(" ")[1] ;
            // verfiy token
            var {userId} = jwt.verify(token, process.env.JWT_SECRET_KEY);
            // get user from token
            const user = await UserModel.findById(userId).select("-password");
            if(user) {
                req.user = user ;
                next() ;
            }
            else {
                res.send({"status": "FAILED",  "message": "this user is deleted"}) ;
            }
        }
        catch(error) {
            res.send({"status": "FAILED",  "message": "unauthorized_user"}) ;
        }
    }
    else {
        res.send({"status": "FAILED", "message": "unauthorized_user"}) ;
    }
}




export default userAuth ;