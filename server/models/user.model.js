const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "no way that's your name..."]
    },
    bio: {
        type: String
    }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;