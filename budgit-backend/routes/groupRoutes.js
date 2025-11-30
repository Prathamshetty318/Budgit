import express from "express";
import {createNewGroup,getUserGroups,getSingleGroup} from "../controllers/groupController.js";
import {verifyToken} from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/create",verifyToken,createNewGroup);
router.get("/my-groups",verifyToken,getUserGroups);
router.get("/:id",verifyToken,getSingleGroup);

export default router;