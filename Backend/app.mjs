import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import adminRouter from './Router/adminRouter.mjs'
import userRouter from './Router/userRouter.mjs'

const app = express()

app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ limit: "5mb", extended: true, parameterLimit: 50000 }))

app.use(cors({ origin: true }));
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())


app.use('/', userRouter)
app.use('/admin', adminRouter)

export default app