import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: "string",
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: "string",
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: "string",
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: "string", //we will use cloudnary url
        required: true,
    },
    avatar: {
        type: "string",
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken: {
        type: String,
    }
}, {timestamps: true}); //it will provide createAt and updateAt

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

export const User = mongoose.model("User", userSchema);

//installing bcrypt and jasonwebtoken for hide pass and token 