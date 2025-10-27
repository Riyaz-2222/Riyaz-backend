import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message: "Hello from Riyaz, you have reached the register user controller"
    })
})


export default registerUser; 