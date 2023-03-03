import express from "express";
import routes from "../controllers/controller";

const router = express.Router();

router.get("/" , routes.getAllAuthor);
router.get("/:id",routes.getOnlyOneAuthor);
router.post("/" , routes.createAuthor);
router.patch("/:id" , routes.updateAuhtor);
router.delete("/:id", routes.deleteAuthor);



export default router;
