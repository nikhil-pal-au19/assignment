const express = require('express');

const app = express()

const PORT = process.env.PORT || 4440

function logger(req, res, next) {
    console.log(`[${Date.now()})] ${req.method} ${req.url}`);
    next();
}

app.use(logger)

app.get{
    "/", (req, res) => {
        res.json({ ok: true });

    }
};

app
    .route("/things/cars")
    .get((req, res) => { })
    .post((req, res) => { })

app
    .route("/things/cars/:carid")
    .get((req, res) => { });
    .put((req, res) => { });



app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`server is now running on PORT${PORT}`)

});

