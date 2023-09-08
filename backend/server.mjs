import express from 'express';
import dotenv from 'dotenv';
import { chats } from './data/data.mjs';

const app = express();
dotenv.config();

//http GET request
app.get('/', (req, res) => {
    res.send("API is running");
})

app.get('/api/chat', (req, res) => {
    //sending the data in dta.js
    res.send(chats);
});

//GET single chat by ID 
app.get('/api/chat/:id', (req, res) => {
  //  console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000,console.log(`Server started on PORT ${PORT}`));