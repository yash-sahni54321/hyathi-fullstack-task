const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    age: {
      type: Number,
    },
    hp: {
      type: Number,
      required: true,
    },
    weight: {
      type: String,
    },
    height: {
      type: String,
    },
    level: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    prevFed: {
      type: Number,
      default: Date.now,
    },
    isAdopted: {
      type: String,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", schema);
