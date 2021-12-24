const token = process.env.MONGO_URI!;
console.log('token:', token);
const config = {
  port: 4000 || process.env.PORT,
  host: 'localhost',
  uri: 'mongodb+srv://yazan:yazan@cluster0.qgpst.mongodb.net/todo_app?retryWrites=true&w=majority'
}

export default config;
