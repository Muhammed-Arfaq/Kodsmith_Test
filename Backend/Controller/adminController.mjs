import User from "../Model/userModel.mjs";
import catchasync from "../Utils/catchasync.mjs";

export const viewAllUsers = catchasync(async(req, res, next) => {
    const users = await User.find() 
    res.json({
        users
    })
})

export const editUser = catchasync(async(req, res, next) => {
    const userId = req.params.userId
    const { fullName, dob, gender, designation, mobile } = req.body
    await User.findOneAndUpdate({_id: userId}, { $set: {
        fullName, dob, gender, designation, mobile
    } })
    res.json({
        message: "Success"
    })
})

export const deleteUser = catchasync(async(req, res, next) => {
    const userId = req.params.userId
    await User.findOneAndDelete({_id: userId})
    res.json({
        message: "Success"
    })
})

export const blockUser = catchasync(async(req, res, next) => {
    const userId = req.params.userId
    await User.findOneAndUpdate({ _id: userId }, { $set: { status: 'Blocked' } })
    res.json({
        message: "Success"
    })
})

export const unBlockUser = catchasync(async(req, res, next) => {
    const userId = req.params.userId
    await User.findOneAndUpdate({ _id: userId }, { $set: { status: 'Active' } })
    res.json({
        message: "Success"
    })
})