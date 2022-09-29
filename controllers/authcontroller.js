const sql=require('../models/db');
const dal = require('../models/dal');

exports.login=async(req, res)=>{
    let user=req.body;
    let message="";
     let result = await dal.validate (user)
  
    res.send(result);
};

exports.register= async (req, res)=>{
    const userPayload = req.body
    
    // add validation
    if(!userPayload.username || !userPayload.password){
        res.status(400).json({success: false, message: 'Username or password is missing!'})
        return
    }

    //save in db
    let command="INSERT INTO registration() values(" + userPayload.fname+"','"+ userPayload.email ;
    const saveRes = await new Promise((resolve, reject) => {
        
    })

    res.status(200).json({success: true, data: saveRes, message: 'Successfully registered!'})


    //return response
    // res.send("new user registrations...")
}