const express = require("express")
const { router: EntryRouter } = require("./entry")  

const app = express()

const port = process.env.PORT || 3333;

app.use(express.json());

app.use("/entry", EntryRouter);

app.listen(port, () => console.log(`listening to port ${port}`))

// removed the app.get("/", (req, res) => res.send("helloWorld"))
// Tested: git log --all --decorate --oneline --graph   (all -> show commit history of all branches local and remote. decorate add branch and tag names to ea commit. oneline = condense commit to one line, showing commit hash and message. Graph = ASCII-based graph to represent commit history.
// Tested git branch Testing    (This create "Testing" branch but does not switch to it)
// Tested git branch            (This displays branch statuses)
// Tested git switch Testing    (This switch to "Testing" branch)
// Tested git checkout -b testing2 (This creates new branch and switch to it and work on it)
// 'q' to unstuck git log
// Tested git merge (merge another branch into current branch)