import { Promise } from "mongoose"

const asyncHandler = (requestHandler)=>{
    return (req,res,next) =>{
        Promise.resolve(requestHandler(res,req,next)).catch((err)=> next(err));
    }
}

export { asyncHandler }

// const asyncHandler = (fn) => async (req, res, next)=>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: true,
//             msg: error.message
//         })
//     }
// }