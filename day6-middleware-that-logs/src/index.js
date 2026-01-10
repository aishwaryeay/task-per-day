import express from 'express'

const app = express()

function logger(method, path, next) {
    console.log(method + " " + path + new Date())
    next()
}

app.get("/", logger , (req, res, next) => {
    logger(req.method, req.path, next)
    res.send("Hello world")
})

app.listen(3000, ()=>{
    console.log("Server running at 3000")
})