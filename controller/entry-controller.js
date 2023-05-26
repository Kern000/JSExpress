const {v4: uuidv4} = require("uuid")

const httpStatus = require("http-status")

let data = [];

// note that data has been changed from const to let to use filter method reassignment

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

const updateOne = (req, res) => {

    const dataToUpdate = req.body;

    const foundByID = data.find((item) => item.id === req.params.id)

// This finds the entire object not just the ID, hence you can use dataToUpdate which is req.body (An object you posted), you can update the value of the specific property you want to change.

    if (foundByID){

        for (const property in dataToUpdate){

            foundByID[property] = dataToUpdate[property]
            
        }

        return res.sendStatus(httpStatus.OK)

    } else {
        
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
}

// This is iterating over the payload. Can update based on this. Becareful of copy and pasting from webpage, it may return JSON syntax error.
// {
//     "activity":"99 push up",
//     "intensityRating":4
//   }
// Also, based on how we are modifying, we are only modifying the value, not the key


const deleteOne = (req, res) => {

    const foundByID = data.find((item) => item.id === req.params.id)

    if (foundByID){

        const findIndex = data.findIndex((item) => item.id === req.params.id)

        if (findIndex >= 0) {
            
            data.splice(findIndex, 1)

        return res.sendStatus(httpStatus.OK)

    } else {
        
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
  }
}

const deleteByDate = (req, res) => {

    const foundByDate = data.find((item) => item.currentDate === req.params.currentDate)

    if (foundByDate) {

        const findIndex2 = data.findIndex((item) => item.currentDate === req.params.currentDate)

        if  (findIndex2 >= 0) {

            data.splice(findIndex2, 1)
        
        return res.sendStatus(httpStatus.OK)
        }

        else {

            return res.sendStatus(httpStatus.NOT_FOUND)
        }
    }
}
        





const deleteEntriesWithID = (req, res) => {

const foundByID = data.find((item) => item.id === req.params.id)

if (foundByID){

    data = data.filter((object) => object.id !== req.params.id)

    return res.sendStatus(httpStatus.OK)

} else {
    
    return res.sendStatus(httpStatus.NOT_FOUND)
}
}

// Note that data.filter will copy the filtered array, so need to reassign it back to data
// method 3 is to use lodash _.remove() based on the item.id === req.params.id

const deleteProperty = (req, res) => {

    const propertyToDelete = req.body

    const foundByID = data.find((item) => item.id === req.params.id)

    if (foundByID){

        for (const property in propertyToDelete){
        
            if (foundByID.hasOwnProperty(property)){

            delete foundByID[property]

            return res.sendStatus(httpStatus.OK)

            }

            else {
            
            return res.send("No property found")
            }
        }
        // delete function deletes both the property key and value
    }
    else {
        
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
}



module.exports = {
    create,
    readAll,
    readID,
    updateOne,
    deleteOne,
    deleteProperty,
    deleteEntriesWithID,
    deleteByDate
}