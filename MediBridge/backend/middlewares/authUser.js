import jwt from 'jsonwebtoken';

// user authentication middleware

const authUser=async (req, res, next) => {
    try {
        // console.log(req);
        
        
       const {token} = req.headers;
    //    console.log('Token : ' , token)
         if (!token) {
                return res.json({ success: false, message: "Not authorized " });
          }
          const token_decode = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(token_decode);
  
          req.userId = token_decode.id 
   
          
          
        
          next();
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

export default authUser;