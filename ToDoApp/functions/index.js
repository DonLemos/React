const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo
} = require('./APIs/todos')

app.get('/todos', getAllTodos);
exports.api = functions.https.onRequest(app);

