import express from 'express'
import { userLogin, userSignup } from '../Controller/authController.mjs'
import { viewAllUsers } from '../Controller/adminController.mjs'

const router = express.Router()

router
    .route('/signup')
    .post(userSignup)

router
    .route('/login')
    .post(userLogin)

export default router
