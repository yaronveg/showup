import express from "express";
import { checkAuth } from "../middlewares/checkAuth.js";
import {
  authUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

////////////// C.R.U.D - CREATE, READ, UPDATE, DELETE //////////////
// CREATE User // MOVED TO LOGIN ROUTES, under "signup"

// READ //
router.get("/api/users", getAllUsers);

// READ user //
router.get("/api/users/:id", getUser);

// UPDATE //
router.put("/api/users/:id", checkAuth, updateUser);

// DELETE //
router.delete("/api/users/:id", checkAuth, deleteUser);

router.post("/api/auth", checkAuth, authUser);

export default router;
