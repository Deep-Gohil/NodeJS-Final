const { response } = require("express")
const Drugs = require("../model/drugsSchema")

const getAllDrugs = async(req,res) =>{
    let data = await Drugs.find()
    res.send(data)
}

const addDrug = async(req,res) =>{
    let data = await Drugs.create(req.body)
    res.send(data)
}

const getDrugById = async(req,res) =>{
    let {id} = req.params
    let data = await Drugs.findById(id)
    res.send(data)
}

const updateDrug = async(req,res) =>{
    let data = await Drugs.findByIdAndUpdate(req.body,{extended:true})
    res.send(data)
}

module.exports = {getAllDrugs,addDrug,updateDrug,getDrugById}