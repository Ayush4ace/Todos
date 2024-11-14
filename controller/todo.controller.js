const Todo = require("../models/todo.models.js");

async function getTodos(req, res){
    const todos = await Todo.findAll();
    return res.json({
        todos
    });
}


async function createTodo(req, res) {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }

    try {
        await Todo.create({ title });

        return res.status(201).json({
            message: "Created title successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}





async function updateTodo(req, res){
    const {id} = req.params;
    const {title, completed} = req.body;
    await Todo.update({title, completed}, {where: {id}});
    return res.json({
        message: "Todo updated successfully"
    });
}


async function deleteTodo(req, res){
    const {id} = req.params;
    await Todo.destroy({where: {id}});
    return res.json({
        message: "Todo deleted successfully"
    });
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}