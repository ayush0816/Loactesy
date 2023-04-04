const BuyPropertyModel=require("../models/buyProperty");
const {ValidateProperty}=require("../validators/buyAndSellValidation");
const addBuyProperty=async (req,res)=>{
    let newProperty ={...req.body.property};
    newProperty.owner=req.user;
    newProperty.status=true;
    await ValidateProperty(newProperty);
    try
    {
        await BuyPropertyModel.create(newProperty);
    }
    catch(err)
    {
        return res.status(500).json({error: err});
    }
    return res.status(200).json({status : "success"});
};

module.exports={addBuyProperty};
