const User = require("../controllers/user.controller");
module.exports = app => {
    app.delete("/api/users/:id", User.deleteOne);
    app.put("/api/users/:id", User.updateOne);
    app.get("/api/users/:id", User.findOne);
    app.post("/api/users", User.create);
    app.get("/api/users", User.find);
}