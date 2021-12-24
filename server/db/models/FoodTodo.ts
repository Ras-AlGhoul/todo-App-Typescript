import { Document, Schema, model } from 'mongoose';

interface IFoodTodo extends Document {
    title: String,
    description: String,
    done: Boolean,
    imageUrl: String,
    carbohydrate: String,
    protein: String
}

const TodosSchema = new Schema<IFoodTodo>({
    title: {
        type: String,
        required: true
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    imageUrl: String,
    carbohydrate: String,
    protein: String
});

const FoodTodo = model<IFoodTodo>('FoodTodo', TodosSchema);

export default FoodTodo;