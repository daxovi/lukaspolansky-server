const saveUser = require("express").Router();
const modelUser = require("../../models/user");

saveUser.post("/save-user", (req, res) => {
    const { name } = req.body;
    const user = new modelUser({
        name: name,
        course:
            [
                {
                    title: "První kurz a první video nadpis",
                    file: "1a",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    title: "První kurz a druhé video nadpis",
                    file: "1b",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    title: "První kurz a třetí video nadpis",
                    file: "1c",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    title: "Druhý kurz a první video nadpis",
                    file: "2a",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    title: "Druhý kurz a druhé video nadpis",
                    file: "2b",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    title: "Druhý kurz a třetí video nadpis",
                    file: "2c",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    title: "Třetí kurz a první video nadpis",
                    file: "3a",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    title: "Třetí kurz a druhé video nadpis",
                    file: "3b",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    title: "Třetí kurz a třetí video nadpis",
                    file: "3c",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }],
    })
    user.save((err, document) => {
        if (err) {
            return res.json({
                msg: "Bohužel nedošlo k vytvoření uživatele"
            })
        } else {
            return res.json({
                msg: `Došlo k úspěšnému vytvoření uživatele ${JSON.stringify(document)}`
            })
        }
    })
});

saveUser.patch("/save-user/:id", async (request, response) => {
    try {
        await modelUser.findByIdAndUpdate(request.params.id, request.body);
        await modelUser.save();
        response.send(modelUser);
    } catch (error) {
        response.status(500).send(error);
    }
});

saveUser.get("/save-user", (req, res) => {
    res.send("Ano, navštívil jsi /save-user GETEM")
})

module.exports = saveUser;