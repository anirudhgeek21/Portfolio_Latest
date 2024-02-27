import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Contact } from './Models/Contact.js';

const app= express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.get("/", (req,res)=> {
    return res.status("Portfolio server sexy");
})

app.post('/contacts', async (req,res)=>{
    try {
        if (
            !req.body.firstname ||
            
            !req.body.email
        ) {
            return res.status(400).send({
                message: 'Send all required fields'
            });
        }

        const newContact = {
            first_name : req.body.firstname,
            last_name : req.body.lastname,
            email : req.body.email,
            description : req.body.description,
        }

        const contact = await Contact.create(newContact);
        return res.status(201).send(contact);

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to db");
        app.listen(PORT, () => (
            console.log(`App is running on port ${PORT}`)
        ));
    })
    .catch((error) => {
        console.log(error)
    });
