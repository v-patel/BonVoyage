import * as express from "express";
import { Example } from "../models";

export let route = express.Router();

// List all items
route.get("/", async (req: any, res: any, next: any) => {
  try {
    let items = await Example.find({ })
    res.send(items);
  } catch (e) { next(e) }
});

//TODO WRITE YOUR API HERE

// Create an item
route.post("/", async (req: any, res: any, next: any) => {
  try {
    let myTask = req.body;
    const _myTask = new Example(myTask);
    await _myTask.save();
    res.send({
      message: "successfully did stuff! :)"
    })
  } catch (e) { next(e) }
});

// Update an item
route.put("/:id", async (req: any, res: any, next: any) => {
  try {
    let myTask = req.body;
    let _myTask = await Example.findOneAndUpdate({ _id: req.params.id }, {
      name: myTask.name,
      dateCreated: myTask.dateCreated
    });
    res.send({
      message: _myTask
    });
  } catch (e) { next(e) }
});

// Delete an item
route.delete("/:id", async (req: any, res: any, next: any) => {
  try {
    let _myTask = await Example.findOneAndDelete({ _id: req.params.id });
    res.send({
      message: _myTask
    });
  } catch (e) { next(e) }
});