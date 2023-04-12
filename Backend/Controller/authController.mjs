import jwt from 'jsonwebtoken'
import User from '../Model/userModel.mjs'
import catchasync from '../Utils/catchasync.mjs'

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    //remove the password from the output
    user.password = undefined;

    res.status(statusCode).json({
        status: 'Success',
        token,
        data: {
            user
        }
    });
};

export const userSignup = catchasync( async(req, res, next) => {
    const { fullName, dob, gender, designation, mobile, email, password, confirmPassword } = req.body
    const user = await User.create({
        fullName,
        dob,
        gender,
        designation,
        mobile,
        email,
        password,
        confirmPassword
    })
    createSendToken(user, 200, res)
})

export const userLogin = catchasync(async(req, res, next) => {
    const { email, password } = req.body

    if(!email | !password) {
        res.json({
            message: "No Data"
        })
    }

    const user = await User.findOne({
        $and: [{ email }, { status: "Active" }],
    }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
        res.json({
            status: "Wrong Password"
        })
    }

    //if everything is correct, send token to user
    createSendToken(user, 201, res);
})