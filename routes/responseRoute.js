import express from "express";
const router = express.Router();

import ResponseController from "../controllers/responseController.js"

router.get("/", ResponseController.getResponses);
router.get("/replies", ResponseController.getReplies);

router.post("/response", ResponseController.newResponse);
router.put("/response", ResponseController.editResponse);
router.delete("/response", ResponseController.deleteResponse);



export default router;
