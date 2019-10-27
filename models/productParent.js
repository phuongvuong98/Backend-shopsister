const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductParentSchema = new Schema(
  {
    name: String,
    category: String,
    groupChild: {
      items: [
        {
          productChildId: {
            type: Schema.Types.ObjectId,
            ref: "ProductChild",
            required: true
          }
        }
      ],
      sum: {
        type: Number,
        default: 0
      }
    },
    description: String,
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    strict: false
  }
);

module.exports = mongoose.model("ProductParent", ProductParentSchema);
