const express = require('express')
const router = express.Router();
const sampleController = require("../controllers/sampleController")
const Sample = require("../models/Sample")


router.post("/add-sample",sampleController.createSample);
router.get("/get-sample", sampleController.getSample);
router.get("/get-single-sample/:id", sampleController.getSingleSimple);
router.put("/edit-sample/:id", sampleController.editSample);
router.delete("/delete-sample/:id",sampleController.deleteSample);

module.exports = router