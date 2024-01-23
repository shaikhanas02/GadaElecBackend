const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Admin",
  }
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
