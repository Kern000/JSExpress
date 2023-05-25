const express = require("express")
const { router: EntryRouter } = require("./entry")  

const app = express()

const port = process.env.PORT || 3333;

app.use(express.json());

app.use("/entry", EntryRouter);

app.listen(port, () => console.log(`listening to port ${port}`))

//removed the app.get("/", (req, res) => res.send("helloWorld"))