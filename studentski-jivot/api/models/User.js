const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const definition = {
  email: { type: String, required: true },
  password: { type: String, required: true },
};
const UserSchema = new Schema(definition);

const UserModel = model("User", UserSchema);
module.exports = UserModel;
