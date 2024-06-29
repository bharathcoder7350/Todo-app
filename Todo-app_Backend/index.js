const express = require("express");
const app= express();
const { updateTodo , createTodo} = require("./types")
const { todo } = require("./todo-database")
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/todo",async ()=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.json({
            msg: "wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg : "Todo Created"
    })
})

app.get("/todos",async ()=>{
    const todos = await todo.find({})
    res.json({
        todos: todos,
    })
})

app.put("/completed",async()=>{
    const updatePayload = req.body
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload)
    if(!parsedUpdatePayload.success){
        res.json({
            msg : "Wrong Inputs"
        })
        return;
    }
    await todo.update({
        _id:updatePayload._id
    },{
        completed:true
    })

    res.json({
        msg:"Todo Updated"
    })
})

app.listen(3000)