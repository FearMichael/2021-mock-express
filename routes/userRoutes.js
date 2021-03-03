const router = require("express").Router();
// const userController = require("./controllers/todos.controller");

const userController = require("../controllers/userController.controller");

router.get("/", async (req, res) => {
    try {

        const todos = await userController.list();
        res.send(todos);

    } catch (err) {
        res.status(500).end();
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await userController.read(id);
        res.send(todo);

    } catch (err) {
        res.status(500).end();
    }
});

router.put("/:id", async (req, res) => {
    try {
        const update = req.body;
        const { id } = req.params;
        const todo = await userController.update({ id, ...update });
        res.send(todo);

    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});

router.post("/", async (req, res) => {
    // console.log(req);
    // console.log(req.body);
    try {
        const create = req.body;
        const todo = await userController.create(create);
        res.send(todo);

    } catch (err) {
        res.status(500).end();
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todos = await userController.remove(id);
        res.send(todos);

    } catch (err) {
        res.status(500).end();
    }
});

router.get("/static", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})

module.exports = router;