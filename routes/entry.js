const express = require("express")
const router = express.Router()

const {create, readAll, readID, updateOne, deleteOne, deleteProperty, deleteEntriesWithID} = require("../controller/entry-controller")

router.get("/", readAll)

router.post("/", create)

router.get("/:id", readID)

router.put("/:id", updateOne)

router.patch("/:id", deleteProperty)

router.delete("/:id", deleteEntriesWithID)


module.exports = {
    router
}
