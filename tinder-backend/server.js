import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:BWo2VDdCwPMzmujm@cluster0.8pjz7kt.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middleware


// DB Config
mongoose.connect(connection_url, {
});

// API Endpoints
app.get('/', (req, response) => response.status(200).send('Hello World'));

app.post('/tinder/card', (req, res) => {
    const dbCards = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`));