const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    default: false
  },
  address: {
    type: String,
    default: false
  },
  birthday: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    default: "https://ucarecdn.com/5d276379-552f-4a08-97e7-744a15f71477/ava.png"
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date
  },
  delete_at: {
    type: Date
  },
  role: {
    type: String,
    default: "user"
  },
  cart: {
    items: [
      {
        productParentId: {
          type: Schema.Types.ObjectId,
          ref: "ProductParent",
          required: true
        },
        productChildId: {
          type: Schema.Types.ObjectId,
          ref: "ProductChild",
          required: true
        },
        quantity: { type: Number }
      }
    ],
    sum: {
      type: Number,
      default: 0
    }
  },
  long: {
    type: Number,
    default: false
  },
  lat: {
    type: Number,
    require: false
  }
});

module.exports = mongoose.model("User", userSchema);
