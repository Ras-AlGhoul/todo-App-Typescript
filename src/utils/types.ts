export type Todo = {
  _id:string,
  title: string,
  description: string,
  done: Boolean,
  price?:string,
  fetchTodos: () => Promise<void>
}

export type WorkTodo = {
  _id:string,
  title: string,
  description: string,
  done: Boolean,
  deadline?: string
  fetchTodos: () => Promise<void>
}

export type FoodTodo = {
  _id:string,
  title: String,
  description: String,
  done: Boolean,
  imageUrl?: string,
  carbohydrate?: string,
  protein?: string,
  fetchTodos: () => Promise<void>
}

export type Form = {
  fetchTodos: () => Promise<void>,
}