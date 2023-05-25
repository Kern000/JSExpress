const {v4: uuidv4} = require("uuid")

const httpStatus = require("http-status")
const data = [];

const create = (req, res) => {

    req.body.id = uuidv4();
    data.push(req.body);
    res.sendStatus(httpStatus.CREATED);

}

const readAll = (req, res) => {
    
    if(data.length > 0){
        return res.json(data);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
}

const readID = (req, res) => {
    
    const foundByID = data.find((item) => item.id === req.params.id)

    if (foundByID) {
        return res.json(foundByID);
    }

    return res.sendStatus(httpStatus.NOT_FOUND);
}

// To get the ID, http://localhost:3333/entry/63e59b55-f9f5-49f2-a47f-61f2c7570327 -> The router /:id is only a placeholder


module.exports = {
    create,
    readAll,
    readID
}