import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.send("welcome"));

// module.exports = router;
export default router;
