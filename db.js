const mongoose=require("mongoose");
//Schema creatio

mongoose.connect("mongodb+srv://lucky:27XGGKAPizK8BjcR@cluster0.qnq3lp0.mongodb.net/")

const creatSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

// const UpdateSchema=mongoose.Schema({
//     Id
// })
const todo=mongoose.model('todo',creatSchema);

module.exports={
    todo  
}
