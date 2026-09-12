const express  = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [
    
]

app.get("/api/todos",(req,res)=>{
    res.json(todos);
});

app.post("/api/todos/",(req,res)=>{
    const newTodo = req.body.text;
    const newTodoItem = {id: Date.now(), task: newTodo};
    todos.push(newTodoItem);
    res.json(newTodoItem);  
});

app.delete("/api/todos/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    todos = todos.filter((todo)=>todo.id !== id);
    res.json({message: "Todo deleted successfully"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});