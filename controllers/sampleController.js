const req = require("express/lib/request")
const Sample = require("../models/Sample")

const createSample = async(req, res) => {
    try{
        const {name, email, phone , city} = req.body
        const sample = new Sample({
            name,
            email,
            phone,
            city
        })
        await sample.save()
        res.status(201).json(sample)
    }catch(error){
        console.log("There is an error", error)
        res.status(500).json({message :  "server error"})
    }
}




const getSample = async(req, res) => {
    try{
        const sample = await Sample.find();
        res.status(200).json(sample)
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: "server error"})
    }
}



const getSingleSimple = async(req, res) => {
    try{
        const {id} = req.params
        const sample = await Sample.findById(id);

        if (!sample) {
            return res.status(404).json({ message: "Sample not found" });
        }

        res.status(200).json(sample)
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: "server error"})
    }
}




const editSample = async(req, res) => {
    try{
        const {id} = req.params;
        const {name,email, phone,city} = req.body
        const sample = await Sample.findByIdAndUpdate(id,{name,email,phone,city})

        if(!sample){
            return res.status(404).json({message: "sample not found"})
        }
        res.status(200).json(sample)
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: "server error"})
    }
}



const deleteSample = async(req, res) => {
    try{
        const {id} = req.params;
        const sample = await Sample.findByIdAndDelete(id)

        if(!sample){
            return res.status(404).json({message: "sample not found"})
        }

        res.status(200).json({message: "server error"})
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: "server error"})
    }
}

module.exports = {createSample, getSample, getSingleSimple, editSample, deleteSample}
