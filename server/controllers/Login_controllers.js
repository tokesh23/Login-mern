 const Loignmodels = require("../model/Lgoin_model")

module.exports.getLogin= async(req,res)=>{
    try {
        const login= await Loignmodels.find();
        res.status(200).json(login);
    } catch (err) {
        
        console.error("Error fetching  Login ",err);

        res.status(500).json({message:"Error fetching Login"})
    }
}

module.exports.saveLogin= async(req,res)=>{
    const {user,password,} =  req.body
    try {
        const data = await Loignmodels.create({user,password});
        res.status(200).json(data)
       
    } catch (error) {
        console.error("Error fetching Login")
        res.status(500).json({message:"Error fetching login"})
        
    }
}