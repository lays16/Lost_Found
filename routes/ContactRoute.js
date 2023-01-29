import express from "express";
import { getItems,
    getItemsById, 
    createItem, 
    deleteItem, 
    updateItem 
} from "../controllers/ItemController.js";

const router = express.Router();

router.get("/items", getItems);
router.get('/items/:id', getItemsById);
router.post("/items", createItem);
router.delete("/items/:id",deleteItem);
router.patch("/items/:id",updateItem);

export default router;

