import express from 'express'
import 'dotenv/config'
import type { Express } from 'express'


const app : Express = express()
const PORT = Number(process.env.PORT)

app.listen(PORT, () => {
    console.log("Server Running at ", PORT)
})