import express from 'express'
import { blockUser, deleteUser, editUser, unBlockUser, viewAllUsers } from "../Controller/adminController.mjs";

const router = express.Router()

router
    .route('/allUsers')
    .get(viewAllUsers)

router  
    .route('/editUser/:userId')
    .patch(editUser)

router
    .route('/deleteUser/:userId')
    .delete(deleteUser)

router
    .route('/blockUser/:userId')
    .post(blockUser)

router
    .route('/unBlockUser/:userId')
    .post(unBlockUser)

export default router