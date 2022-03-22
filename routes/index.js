const router=require("express").Router()
const Todo=require("../models/Todo");
// routes will be here...
router.get("/", async(req,res)=>{
    // res.send(" welcome  to the home page!")
    const allTodo=await Todo.find();

    res.render("index",{todo:allTodo})
})

module.exports=router;