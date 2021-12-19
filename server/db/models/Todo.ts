import { Document, Schema, model, connect } from 'mongoose';

interface Todo extends Document{
    title: String,
    description: String,
    done: Boolean
}
const TodosSchema = new Schema<Todo>({
    title: String,
    description: String,
    done: {
        type: Boolean,
        default: false
    }
});

const Todo = model<Todo>('Todo', TodosSchema);

export default Todo;