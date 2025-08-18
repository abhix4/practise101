import express from 'express'

const app = express()
app.use(express.json())


app.get("/",(req,res) => {
    res.json({
        message:"hello world!"
    })
})

app.post("/data", (req,res) =>{
    const {name, age} = req.body;
    res.json({
        age: age,
        name: name
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})