import express,{ json} from "express";
import connectDB from "../backend/db.js";
import Todo from "./todoModel.js"

const app= express();
const port=8080;

//middlewares
app.use(json());
connectDB();



app.get('/', (req, res) => {
 Todo.find({}).then((todoList)=>{
  res.status(200).json({todoList})
 }).catch((err)=>{
  res.status(500).json({error:'Internal server error'})
 })
    
  })

  app.post('/', (req, res) => {
    const{title,endDate}=req.body;
    const isCompleted=false;
    const todo = new Todo({title,isCompleted,endDate});
    Todo.create(todo).then((todo)=>{
      res.status(201).json({todo})
    })
       
     })





  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  
 