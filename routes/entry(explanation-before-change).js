const express = require("express")
const router = express.Router()

//router = express.Router() creates the router object which allows you to define multiple routes and middleware.

router.get("/a", (req, res) => {

    res.json({message:"GET OK"})   
})

// "/" is the basic request route of the router object -> before any middleware
//req is request parameter -> req object
//res is response parameter -> req object 
//so when I define the parameter as /a -> so I would have to use http://localhost:3000/entry/a -> using get

router.post("/b", (req, res) => {

    res.json({message:"POST OK"})
})

//so when I define the parameter as /b -> so I would have to use http://localhost:3000/entry/b -> using post 


module.exports = {

    router

}

//This entry.js sets up a simple API endpoint with two routes, one for handling GET requests and another for handling POST requests.
// import express, set up router object, define the routes of router object, through defining the verb on what the user is trying to do.
//GET is route
//POSt is route here too
