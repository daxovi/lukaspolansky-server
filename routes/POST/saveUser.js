const saveUser = require("express").Router();
const modelUser = require("../../models/user");

saveUser.post("/save-user", (req, res) => {
    const { name } = req.body;
    const user = new modelUser({
        name: name,
        course:
            [
                {
                    file: "lekce1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, 
                
                {
                    file: "pohyb1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce2",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                
                {
                    file: "pohyb2",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace2",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                
                {
                    file: "pohyb1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce4",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                
                {
                    file: "pohyb2",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace2",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce6",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace1",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce7",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb4",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce8",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace4",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce9",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb4",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce10",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace4",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce11",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace3",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "wish",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "wish",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "wish",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce13",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb6",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce14",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace6",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce15",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb6",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce16",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace6",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "pohyb5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "lekce17",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "relaxace5",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
            
                {
                    file: "wish",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                }, {
                    file: "wish",
                    completed: 0,
                    date: Date.now(),
                    eval: [0]
                },
                {
                    file: "wish",
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