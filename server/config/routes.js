const main = require("./../controllers/main");

module.exports = (app) => {
    app.get("/main", main.index),
    app.post("/main", main.new),
    app.post("/main/:id", main.rate),
    app.get("/main/:id", main.show),
    app.put("/main/:id", main.update),
    app.delete("/main/:id", main.remove)
}