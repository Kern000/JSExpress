const express = require("express")
const { router: EntryRouter } = require("./entry")  

// import a router method from entry.js (hence is require("./entry")
// we rename router to EntryRouter so that we can use a new variable name

const app = express()

// app object is used to represent our server and will be used to define routes and handle requests.
// router which has been renamed to EntryRouter, within entry.js defines the request routes and the response

const port = process.env.PORT || 3000;

// take port number from environment variable - meaning can pass this value in. || is default value set.
// The port variable is set to either the value of the PORT environment variable or 3000 if the environment variable is not set. This allows flexibility in specifying the port number where the server will listen for incoming requests.
// In a Node.js application, process.env is an object that contains the user environment. It provides access to various environment variables defined in the environment where the Node.js process is running.
// The PORT environment variable is commonly used to specify the port number for a server to listen on. By using process.env.PORT, the code is attempting to retrieve the value of the PORT environment variable.

app.use("/entry", EntryRouter);

// every route on this router now lies on /entry. Hit your server, default is /, API now is /entry --> /entry/1 or /entry/2
// every end point in /entry will have /entry preceding
// he app.use() function is used to mount the EntryRouter as middleware for the "/entry" route. 
// This means that any requests that start with "/entry" will be handled by the EntryRouter.

app.listen(port, () => console.log(`listening to port ${port}`))

//app.listen() function is called to start the server and make it listen for incoming requests on the specified port
