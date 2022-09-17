import express from "express";
const router = express.Router();

import userAuth from "../middlewares/auth-middleware.js";

import userController from "../controllers/userController.js";

// PUBLIC ROUTES
router.post("/login", userController.signin);
router.post("/signup", userController.signup);

// PRIVATE ROUTEs
router.get("/", userAuth, userController.getUser);
router.put("/", userAuth, userController.editUser);
router.delete("/", userAuth, userController.deleteUser);
router.put("/deactivate", userAuth, userController.deactivateUser);

export default router;
