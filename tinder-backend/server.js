import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:BWo2VDdCwPMzmujm@cluster0.8pjz7kt.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
});

// API Endpoints
app.get('/', (req, response) => response.status(200).send('Hello World'));

app.post('/tinder/cards', async (req, res) => {
    try {
        const dbCard = req.body;
        const data = await Cards.create(dbCard);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/tinder/cards", async (req, res) => {
    try {
        const data = await Cards.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`));