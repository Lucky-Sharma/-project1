// body{
// title:String
// descripition:string    
// }
//                                            Using Zod
const zod=require("zod");

const creatTodo= zod.object({
    title:zod.string(),
    descripition:zod.string()
})
const UpdateTodo=zod.object({
    id: zod.string()
})

module.export={
    creatTodo,
    UpdateTodo
}
