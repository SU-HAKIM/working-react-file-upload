const express = require('express');
const mongoose = require('mongoose');
const Model = require('./model');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('home')
})

app.post('/uploads', async (req, res) => {
    try {
        console.log(req.body)
        let post = new Model({ title: req.body.title, name: req.body.name, image: req.body.image });
        let result = await post.save();
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect('mongodb://localhost:27017/masteryfileupload', { useNewUrlParser: false }).then(() => {
    app.listen(5000, () => {
        console.log('listening');
    })
}).catch(err => {
    console.log(err);
})
