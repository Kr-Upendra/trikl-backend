import express from "express";
import itemController from "../controller/itemController.js";

const router = express.Router();

router
  .route("/")
  .get(itemController.getAllItem)
  .post(itemController.createItem);

router
  .route("/:id")
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

export default router;
