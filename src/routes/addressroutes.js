const express = require("express");
const protect = require("../middleware/authmiddleware");

const {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/addressscontroller");

const router = express.Router();

router.post("/add", protect, addAddress);
router.get("/get", protect, getAddress);
router.put("/update/:id", protect, updateAddress);
router.delete("/remove/:id", protect, deleteAddress);


module.exports = router;