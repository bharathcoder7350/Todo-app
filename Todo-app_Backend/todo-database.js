const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mahekb099:mahekb099@hacklockfirstdatabase.7p10krz.mongodb.net/todo_app")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports = todo