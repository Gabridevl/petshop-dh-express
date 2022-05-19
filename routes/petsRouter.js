const express = require("express");
const petController = require("../controllers/petsController");
const router = express.Router();

// router.get("/", petController.index);
router.get("/pets", (req, res) => res.send("Lista de Pets"));
router.get("pets/:id", petController.show);
router.post("/pets", petController.create);
router.put("/pets/:id", petController.update);
router.delete("/pets/:id", petController.destroy);

module.exports = router;
