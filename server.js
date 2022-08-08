const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const path = require("path");





app.set('view engine', 'ejs')
app.set("views", __dirname + "/views")

const indexRoute = require("./routers/index")
const subpageRoute = require("./routers/subpage")
const readRoute = require("./routers/read")


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }))

app.use("/", indexRoute)
app.use(subpageRoute)
app.use(readRoute)










app.use(express.static('public'))



app.listen(3000, () => { console.log("server is running") })