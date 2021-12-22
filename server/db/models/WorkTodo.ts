import { Document, Schema, model } from 'mongoose';

interface IWorkTodo extends Document {
    title: String,
    description: String,
    done: Boolean,
    subTasks: IWorkTodo[],
    deadline: String
}

const TodosSchema = new Schema<IWorkTodo>({
    title: {
        type: String,
        required: true
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    subTasks: [{}],
    deadline: String,
});

const Todo = model<IWorkTodo>('Todo', TodosSchema);

export default Todo;
