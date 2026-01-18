import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const auth=(req,res,next)=>{
    const token=req.headers.authorization;
   
    try {
        jwt.verify(token,process.env.JWT_SECRET_KEY);
        next();
    } catch (error) {
        res.json({success:false,message:"Unauthorized"});
    }

}

export default auth;