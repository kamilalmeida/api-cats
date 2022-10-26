const express = require('express');
const app = express();

let cats = [];
let id = 1

app.use(express.json());

//Rafael coding here is OK 
app.post("/cat", function (req, res) {

    const { name, colors } = req.body;
    const cat = { "id": id, "name": name, "colors": colors };

    if (!name || !colors) return res.status(400).json();

    cats.push(cat);
    id = id + 1;
    return res.status(201).json(cat);
});

//Rafael coding is here OK
app.get("/cat", function (req, res) {
    if (cats.length <= 0) return res.status(200).json();
    res.json(cats);
});

//Rafael coding is here OK 
app.get("/cat/:id", function (req, res) {

    const { id } = req.params;
    const cat = cats.find(cat => cat.id == id);

    if (!cat) return res.status(404).json();

    res.json(cat);
});
//Rafael coding is here OK
app.patch("/cat/:id", function (req, res) {

    const { id } = req.params;

    const { body } = req;

    const cat = cats.find(cat => cat.id == id);
    console.log(cat)

    let name = req.body.name

    let colors = req.body.colors

    cats[id - 1] = cat

    if (!cat) return res.status(404).json({ "resposta": "gato não encontrado" });

    if (name != null) {
     
        cat.name = name
    }

    if (colors != null) {

      cat.colors = colors

    }

    if (!name && !colors) return res.status(400).json();

      res.json(cat)
});

// Rafael coding is here OK  
app.delete("/cat/:id", function (req, res) {
    

    
        const  {id} = req.params
        const cat = cats.find(cat => cat.id == id)
        if (cat) {
           const catFiltrado = cats.filter(gato => gato.id != id)
           cats = catFiltrado
            
           console.log(catFiltrado)
          return res.status(204).json({"resposta":"TUDO CERTO"})
          console.log()
        }
    
       if (!cat) return res.status(404).json({"resposta":"gato não encontrado"});
        res.json(cat)
    
      
});

app.listen(3000, function () {
    console.log("server is running");
});
