const express = require("express")
const router = express.Router()

const {create, readAll, readID, updateOne, deleteOne, deleteProperty, deleteEntriesWithID, deleteByDate} = require("../controller/entry-controller")

router.post("/", create)

router.get("/", readAll)

router.get("/:id", readID)

router.put("/:id", updateOne)

router.patch("/:id", deleteProperty)
// note that this is not a proper patch, as it does not replace the property with something.

router.delete("/date/:currentDate", deleteByDate)

router.delete("/id/:id", deleteEntriesWithID)

module.exports = {
    router
}


// Will be using this req.body for post, get, put
//
// {
//     "summary":"Upper Body5",
//     "currentDate":"31-12=2022",
//     "activity":"100 push up",
//     "intensityRating":3
//   }
//