const express = require("express");

const app = express();

const mongo = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

// const bodyParser = require('body-parser');

const cors = require("cors");

app.use(express.urlencoded({ extended: true }));

mongo.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected");
  }
);

app.use(cors());
app.use(express.json());

// schema

const notesSchema = {
  title: String,
  content: String,
};
const Note = mongo.model("dc-contact", notesSchema);

const appSchema = {
  name: { type: String },
  email: { type: String },
  usn: { type: String },
  phone: { type: String },
  semester: { type: String },
  github: { type: String },
  bio: { type: String },
  applymsg: { type: String },
};

const Applicant = mongo.model("dc-applicants", appSchema);

app.post("/contact", async function (req, res) {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  let saveContent;
  try {
    saveContent = await newNote.save();
  } catch (error) {
    return res.json(error);
  }

  return res.json({
    message: "content created successfully",
    savecontent: saveContent,
  });
});

app.post("/application", async function (req, res) {
  const newApplication = new Applicant({
    name: req.body.name,
    email: req.body.email,
    usn: req.body.usn,
    phone: req.body.phone,
    semester: req.body.semester,
    github: req.body.github,
    bio: req.body.bio,
    applymsg: req.body.applymsg,
  });

  let saveApplicant;

  try {
    saveApplicant = await newApplication.save();

    res.status(200).json(saveApplicant);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

app.get("/allapplications", async function (req, res) {
  try {
    let members;
    members = await Applicant.find();
    console.log(members);
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.get("/allcontacts", async function (req, res) {
  try {
    let contact = await Note.find();
    console.log(contact);
    res.status(200).json(contact);
  } catch (error) {
    res.json(500).json(error);
  }
});

app.listen(1111, () => {
  console.log("server running on 1111");
});

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
