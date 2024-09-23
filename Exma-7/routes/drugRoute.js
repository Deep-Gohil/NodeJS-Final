const { Router } = require('express');
const { getAllDrugs, getDrugById, addDrug } = require('../controller/drugController');

const drugRouter = Router()

drugRouter.get("/",getAllDrugs)
drugRouter.get("/:id",getDrugById)
drugRouter.post("/",addDrug)

module.exports = drugRouter;