import { Document, Schema, model, connect } from 'mongoose';

interface Todo extends Document{
    description: String,
    done: Boolean
}
const TodosSchema = new Schema<Todo>({
    description: String,
    done: {
        type: Boolean,
        default: false
    }
});

const Todo = model<Todo>('Todo', TodosSchema);

export default Todo;