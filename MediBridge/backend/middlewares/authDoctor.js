import jwt from 'jsonwebtoken';

// Doctor authentication middleware

const authDoctor=async (req, res, next) => {
    try {
        // console.log(req);
        
        
       const {dtoken} = req.headers;
    //    console.log('Token : ' , token)
         if (!dtoken) {
                return res.json({ success: false, message: "Doctor Not authorized " });
          }
          const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
            // console.log(token_decode);
  
          req.docId = token_decode.id 
          next();
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

export default authDoctor;