const express = require('express');

const app = express();

const mongo = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(express.urlencoded({extended:true}));

mongo.connect("mongodb+srv://nischal:1234567890@dc.hvmez.mongodb.net/dc-web",
{ useNewUrlParser: true , useUnifiedTopology: true },
()=>{
    console.log('db connected');
})

// const corsOptions = {

//     origin:"http://127.0.0.1:5500/"
// }


app.use(cors());
app.use(express.json());


// schema 

const notesSchema = {

    title:String,
    content:String,
}
const Note = mongo.model("dc-contact",notesSchema);



app.post('/contact', async function(req, res) {
    // console.log(req.body)
    // // res.send("express in working")
    // console.log('hit!')
    // res.json(req.body)

    // let newNote = new Note({

    //     title: req.body.title,
    //     content: req.body.content,

    // })
    // await newNote.save();
    // res.json({"sucess":"work aath!"})
    
    const newNote = new Note({
        title:req.body.title,
        content:req.body.content,
    });

    let saveContent;
    try {
        saveContent = await newNote.save();
    } catch (error) {
        
        return res.json(error);

    }

    return res.json({ message: 'content created successfully',savecontent: saveContent });




})





app.listen(1111,() => {
    console.log("server running on 1111")
})

