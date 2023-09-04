import Item from "../models/itemModel.js";

const getAllItem = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "success",
      result: items.length,
      doc: { items },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const createItem = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const item = await Item.create({
      title,
      description,
    });
    res.status(201).json({
      status: "success",
      message: "new item added!",
      doc: { item },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const updateItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!item)
      return res.status(404).json({
        status: "fail",
        message: "Item with given id not found!",
      });

    res.status(200).json({
      status: "success",
      message: "item updated!",
      doc: { item },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item)
      return res.status(404).json({
        status: "fail",
        message: "Item with given id not found!",
      });

    res.status(204).json({
      status: "success",
      message: "item deleted!",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

export default {
  getAllItem,
  createItem,
  updateItem,
  deleteItem,
};
