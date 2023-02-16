const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./router/UserRouter")


const app = express()

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/Netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected")
})

app.use("/api/user", router)


app.listen(5000, console.log("server stated"))