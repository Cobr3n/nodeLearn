const express = require('express');
const todos = require('./todos');
const morgan = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.use(morgan('dev'));

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/scss'
}));

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index', {
        title: "Express Todo List",
        todos
    });
});

app.get('/todos', (req, res) => {

    if (req.query.completed) {
        return res.json(todos.filter(todo => todo.completed.toString() === req.query.completed.toString()))
    }
    res.render('todos', {
        title: "Todo list page!",
        todos
    });
});

app.get('/todos/:id', (req, res) => {
    let todo = todos.find(todo => todo.id == req.params.id);
    if(!todo) todo= false;

    //if (!todo) return res.status(404).send('Not found this task');
    res.render('todo', {
        title: "Todo detail",
        todo
    });
});


app.listen(3000, () => console.log("Server Start!!!"));




