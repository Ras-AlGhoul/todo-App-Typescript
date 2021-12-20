export type Todo = {
  _id?:String,
  title: String,
  description: String,
  done?: Boolean,
  fetchTodos: () => Promise<void>
}
