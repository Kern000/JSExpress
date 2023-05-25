const express = require("express")
const router = express.Router()

const {create, readAll, readID} = require("../controller/entry-controller")

router.get("/", readAll)

router.post("/", create)

router.get("/:id", readID)

module.exports = {
    router
}
