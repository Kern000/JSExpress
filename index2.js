const express = require("express")
const app = express()


app.get("/", function (req, res) {

        res.send("Hello World")

})

app.put("/", function (req, res) {

        res.send("Hello Second Time")

})

app.listen(3333, function(){
   console.log("server is running on local host 3333")
})

// This is using .get -> user can get response thru get by going YARC and get http://localhost:3000/
// app.listen() tells you what port you are listening - can check where is the port of your backend server
// app.listen is not nested in app.get -> becareful. They are two separate functions.







