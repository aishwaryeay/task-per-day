import express from 'express'

const app = express()

function logger(req, res, next) {
    console.log(req.method + " " + req.path + new Date())
    next()
}

app.get("/", logger , (req, res) => {
    res.send("Hello world")
})

app.listen(3000, ()=>{
    console.log("Server running at 3000")
})