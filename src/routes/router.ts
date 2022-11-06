import  express, {Application,Request,Response,NextFunction,RouterOptions}  from "express";
const router = express.Router();
import mainController from "../controller/mainController";
import user from "../model/modelMain"

// http://localhost:3000/ HTTP-method GET
router.get("/",mainController.getAll);

// http://localhost:3000/additem    HTTP-method POST
router.post("/additem",mainController.addItem);

// http://localhost:3000/delete/{object ID} HTTP-method POST
router.delete("/delete/:id",mainController.deleteItem);

// http://localhost:3000/update/{object ID} HTTP-method POST
router.put("/update/:id",mainController.updateOne);

// http://localhost:3000/deleteAll HTTP-method POST
router.delete("/deleteAll",mainController.deleteAll);

export default router;