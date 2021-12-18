const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    productId: Number,
    description: String ,
    link: String ,
});

const Todo = mongoose.model('Todo', TodosSchema);

module.exports = Todo;
