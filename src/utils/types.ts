export type Todo = {
  _id:string,
  title: String,
  description: String,
  done?: Boolean,
  fetchTodos: () => Promise<void>
}

export type Form = {
  fetchTodos: () => Promise<void>,
}