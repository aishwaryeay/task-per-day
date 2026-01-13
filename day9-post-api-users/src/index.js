import express from 'express'

const app =  express()
app.use(express.json());
let User = []
let newUserId = 1

app.post("/", (req, res) => {

    const { name, email } = req.body

    const newUser = {
        id: newUserId++,
        name,
        email,
        createdAt : new Date().toISOString()
    }

    User.push(newUser)

    res.send(newUser)
})

app.listen(3000, () => {
    console.log("App running at 3000")
})