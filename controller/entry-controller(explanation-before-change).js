// const {v4: uuidv4} = require("uuid")

const httpStatus = require("http-status")
const data = [];

const create = (req, res) => {
    data.push(req.body);
    res.sendStatus(httpStatus.CREATED);
}

// it is request.body because you will be using YARC and POST - to put into the body, so using the local and path defined through the router and middlewares.

const readAll = (req, res) => {
    if(data.length > 0){
        return res.json(data);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
}

// note that res.json parses the data in the body which stores the data
// This means at this moment you don't need to use npm install body-parser
// npm install body-parser is a middleware to parse the body, but now thanks to express JSON. Don't need.

module.exports = {
    create,
    readAll
}