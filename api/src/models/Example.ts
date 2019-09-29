import * as mongoose from "mongoose";

var schema = new mongoose.Schema({

    //create schema elements here
    name: { type: String, required: true },
    dateCreated: { type: Date, required: true }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: "example",
  });

export var Example = mongoose.model('Example', schema);
