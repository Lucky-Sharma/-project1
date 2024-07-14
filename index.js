const express=require("express");
const app=express(); 
const{creatTodo}=require("./types.js");
const{UpdateTodo}=require("./types.js");
const {todo}=require("./db");
const zod=require("zod");
app.use(express.json());

app.post('/todo',async function(req,res){
    const title=req.body.title;
    const description=req.body.description;
    console.log(title);
    console.log(description);
    //const response=creatTodo.creatTodo(title);
    //const {success} = creatTodo.safeParse(title);
    const {success} = creatTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg:"Invalid information"
        })
        return;
    }
    //data goes in mongoDB
    await todo.create({
        title:title,
        description:description,
        completed:false
    })
})
app.get('/todos',function(req,res){
    todo.find({}).then( function(value){
        res.json({
            values:value
        })
    })

})
app.put('/completed',async function(req,res){
    const description=req.body.description;
    const response2=UpdateTodo.safeparse(description);
    if(!response2.sucess){
        res.status(411).json({
            msg:"Not valid"
        })
    }
    await UpdateTodo({
        _id:req.body.id
    },
    {
        completed:true
    })
    res.json({
        msg:"Todo is completed"
    })
     
})
app.listen(3000);
