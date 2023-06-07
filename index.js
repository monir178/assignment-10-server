const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const allCourses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('Tech API Running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(allCourses);
    }
    else {
        const categoryCourse = allCourses.filter(course => course.category_id == id);
        res.send(categoryCourse);
    }
})

app.get('/courses', (req, res) => {
    res.send(allCourses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = allCourses.find(c => c._id === id);
    res.send(selectedCourse);
})



app.listen(Port, () => {
    console.log("Tech Learn Server Running on PORT", Port);
})