import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    dob: {
        type: Date,
    },
    gender:{
        type: String
    },
    designation: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'provide a password'],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'confirm your password'],
        validate: {
            validator: function(el) {
                return el === this.password 
            },
            message: 'Password are not the same'
        }
    },
    status: {
        type: String,
        default: 'Active'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
})

userSchema.pre('save', async function(next){
if(!this.isModified('password')) return next()
this.password = await bcrypt.hash(this.password, 12)
this.confirmPassword = undefined
next()
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
if(this.passwordChangedAt) {

    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)

    return JWTTimestamp < changedTimestamp
}

//false means not changed
return false
}

userSchema.methods.createPasswordResetToken = function() {
const resetToken = crypto.randomBytes(32).toString('hex')

this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')

this.passwordResetExpires = Date.now() + 10 * 60 * 1000

return resetToken
}

const User = mongoose.model('User', userSchema)

export default User