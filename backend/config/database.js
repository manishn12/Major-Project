const mongoose = require("mongoose");

const connnectDatabase =()=>{
    mongoose.connect("mongodb+srv://admin-manish:test123@cluster0.tshmt.mongodb.net/Ecommerce?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connnectDatabase;

