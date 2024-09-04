const express = require('express');
const app = express();
app.use(express.json())

let db = []
app.get("/",(req,res)=>{
    res.send(db);
})

app.post("/",(req,res)=>{
    let data = req.body;
    db.push(data);
    res.send(data);
})

app.patch("/:id",(req,res)=>{
    let {id} = req.body;
    let index = db.findIndex(item=>item.id===id);
        db[index] = {...db[index],...req.body};
        res.send(db[index]);
})


app.delete("/:id",(req,res)=>{
    let {id} = req.params;
    let index = db.findIndex(item=>item.id===id);
    db.splice(index,1);
    res.send("Item deleted successfully");
})

app.listen(8090,()=>{
    console.log("Listening on http://localhost:8090");
    
})