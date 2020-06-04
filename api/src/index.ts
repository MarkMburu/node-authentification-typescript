import mongoose from 'mongoose'
import express from 'express'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import {REDIS_OPTIONS,SESSION_OPTIONS,APP_PORT,MONGO_OPTIONS,MONGO_URI} from './config'

// ;(async()=>{
 mongoose.connect(MONGO_URI,MONGO_OPTIONS)

const ReditStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)
const app = express()

app.use(
  session({
    ...SESSION_OPTIONS,
    store: new ReditStore({client}),
  })
)

app.get('/',(req,res)=> res.status(200).json({message:'Works'}))

app.listen(APP_PORT,()=> console.log(`listening on ::: http://localhost:${APP_PORT}`))
// })()

