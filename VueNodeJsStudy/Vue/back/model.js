let db = require("./db"); //引入 Mongoose
let Schema = db.Schema;

let UserSchema = new Schema({
  name: String,
  info: {
    age: Number,
    height: Number
  }
});

let Users = db.model("User", UserSchema);

module.exports = { Users };