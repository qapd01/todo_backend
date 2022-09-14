const express = require("express");

const app = express();
const PORT = 8080;

const todoRouter = require("./src/api/todo/todo.route.js");

// //Get all todoList
// app.get("/", (req, res) => {
//   res.send("Get all TodoLists");
// });

// //Get 1 todoList
// app.get("/:todoId", (req, res) => {
//   res.send("Get 1 TodoList");
// });

// //Post todoList
// app.post("/", (req, res) => {
//   res.send("Post TodoList");
// });

// //Put todolist
// app.put("/:todoId", (req, res) => {
//   res.send("Update TodoList");
// });

// //Delete todoList
// app.delete("/:todoId", (req, res) => {
//   res.send("delete TodoList");
// });


app.use('/', todoRouter)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
