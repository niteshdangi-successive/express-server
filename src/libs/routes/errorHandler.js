export const errorHandler = (req, res, next)=>{
    res.status(500).json({error: "Not Found",
    message: "error",
    status: 500,
    timestamp: "2019-01-08T17:38:21.929Z"});
    next();
   }