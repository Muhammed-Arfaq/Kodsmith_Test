import { adminInstance, userInstance } from '../axios'



export const userLogin = (email, password) => userInstance.post("/login", { email, password })

export const userSignup = (fullName, dob, gender, designation, mobile, email, password, confirmPassword) => userInstance.post("/signup", { fullName, dob, gender, designation, mobile, email, password, confirmPassword })

export const viewAllUsers = () => adminInstance.get("/allUsers")
