import express from "express";
import type { Express, Request, Response } from "express";

const app : Express = express()
const port = process.env.PORT || 3000

app.get('/health', (req: Request, res: Response) => {
    res.json({
        "status" : "OK",
        "uptime" : "running server"
    })
})

app.listen(port, ()=>{
    console.log("App running at port ", port)
})
