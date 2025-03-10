import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    //get details
    //validation - not empty
    //check user exists: username
    //create user
    //remove password and refresh token field from response
    //check for user creation
    //return response 

    const username = req.body.username?.trim().toLowerCase();
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password?.trim();

    if ([username, email, password].some((field) => field === "")) {
        throw new ApiError(400, "All fields required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(400, "User already exists");
    }

    const user = await User.create({
        username: username.toLowerCase(),
        email,
        password
    });

    const createdUser = await User.findById(users._id).select(
        "-password -refreshToken"
    );

    if(!createduser)
    {
        throw new ApiError(500,"Something went wrong while registering the user");
    }
    
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User created successfully")
    )
});

export { registerUser }