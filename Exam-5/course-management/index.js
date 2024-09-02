const PORT = 3000
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

let db = []


app.get("/",(req,res)=>{
    res.send("Welcome to the Online Course Management API.")
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/courses", (req, res) => {
    res.send(db)
})

app.get("/courses/add", (req, res) => {
    res.sendFile(__dirname + "/addCourse.html");
})
app.post("/courses/add", (req, res) => {
    let { name, category, instructor, duration } = req.body;
    
    if(!name ||!category ||!instructor ||!duration){
        return res.status(400).send("All fields are required");
    }
    else{
        const newCourse = {
            id: Date.now(),
            name: name,
            category: category,
            instructor: instructor,
            duration: duration,
        };
        
        db.push(newCourse);
        res.json(newCourse);
    }

});

app.patch("/courses/update/:id", (req, res) => {
    const id = req.params.id;
    const { name, category, instructor, duration } = req.body;

    const course = db.find(course => course.id === id);

    if (!course) {
        return res.send("Course not found");
    }

    course.name = name;
    course.category = category;
    course.instructor = instructor;
    course.duration = Number(duration);

    res.json(db);
});

app.delete("/course/delete/:id",(req, res)=>{
    const id = req.params.id;
    const index = db.findIndex(course => course.id === id);

    db.splice(index, 1);
    res.send("Course deleted successfully");
})

app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
})