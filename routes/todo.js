const router=require("express").Router();
const Todo=require("../models/Todo")


//routes
router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    console.log(todo);
    const newTodo=new Todo({todo})
    // save the todo
    newTodo.save()
    .then(()=>{
     
   console.log("Sucessfully added todo!")
  res.redirect("/");
})
.catch((err)=>console.log(err));

})
.get("/delete/todo/:_id",(req,res)=>{
    const{_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Deleted Todo Successful!")
     res. redirect("/")
    })
    .catch((err)=>console.log(err));
}).get('get/todo/:_id',(req,res)=>{
    const{_id}=req.params;
    Todo.get({id:_id})
    .then(()=>{
        //console.log("Delete Todo Successful!")
     res. redirect("/")
    })
    .catch((err)=>console.log(err));
})
module.exports=router;