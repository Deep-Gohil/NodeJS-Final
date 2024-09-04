const express = require('express')
const app = express()
app.use(express.json())

let initialRecipe = [
    {
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish.',
      preparationTime: '15 minutes',
      cookingTime: '15',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      country: "India",
      veg: true,
      id: 1
    }
  ]

  app.post("/recipe/add", (req, res) => {
    let { name, description, country, cookingTime, imageUrl } = req.body;

    let data = {
        name: name,
        description: description,
        country: country,
        cookingTime: cookingTime,
        imageUrl: imageUrl,
        veg: true,
        id: initialRecipe.length + 1
    };

    if(!name || !description || !country || !cookingTime || !imageUrl){
        return res.status(400).send("All fields are required.");
    }
    initialRecipe.push(data);

    res.send("Recipe added successfully.");
});

app.patch("/recipe/update/:id",(req, res)=>{
    let id = req.params.id;
    let { name, description, country, cookingTime, imageUrl } = req.body;
    let found = initialRecipe.find(recipe => recipe.id == id);

    found.name = name
    found.description = description 
    found.country = country 
    found.cookingTime = cookingTime 
    found.imageUrl = imageUrl 
    res.send("Recipe updated successfully.")
})
app.delete("/recipe/delete/:id",(req,res)=>{
    let id = req.params.id;
    initialRecipe = initialRecipe.filter(recipe => recipe.id != id);
    res.send("Recipe deleted successfully.")
})

app.get("/",(req,res)=>{
    res.send("welcome to the recipe api.")
})

app.get("/index",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/recipe/all",(req,res)=>{
    res.send(initialRecipe)
})

app.get("/add",(req,res)=>{
    res.sendFile(__dirname + "/recipe.html")
})



app.listen(8090,()=>{
    console.log("listening on http://localhost:8090");
})