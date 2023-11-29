const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const definition = {
  name: { type: String, required: true },
  description: { type: String, required: true },
  datetime: { type: Date, required: true },
  price: { type: Number, required: true },
};
const SpendingSchema = new Schema(definition);

const SpendingModel = model("Spending", SpendingSchema);
module.exports = SpendingModel;
