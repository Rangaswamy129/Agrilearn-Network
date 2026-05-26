const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

user:{
type:String
},

products:[
{
name:String,
price:Number,
quantity:Number
}
],

totalPrice:Number,

address:String,

paymentMethod:String

},{
timestamps:true
});

module.exports = mongoose.model("Order",orderSchema);