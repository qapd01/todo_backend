const TodoModel = require("../../../models/todo.js");

const responseSuccess = (req, res, data) =>
  res.status(200).json({
    message: "success",
    result: data,
  });

module.exports = {
  async getAllTodo(req, res) {
    const todo = await TodoModel.find();
    return responseSuccess(req, res, todo);
  },

  async getTodo(req, res) {
    const todo = await TodoModel.findById(req.params.todoListId);
    console.log(req.params);
    if (!todo) {
      return res.status(404).end();
    }
    responseSuccess(req, res, todo);
  },

  async createTodo(req, res) {
    const newTodo = await TodoModel(req.body);
    console.log(req.body);
    console.log(newTodo);
    try {
      const saveTodo = await newTodo.save();
      console.log(saveTodo);
      res.status(200).json(saveTodo);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  },
  async updateTodo(req, res) {
    try {
      const id = req.params.todoListId;
      if (!id) throw new Error("id not defined");
      const todo = await TodoModel.findByIdAndUpdate(id, req.body);
      return responseSuccess(req, res, todo);
    } catch (err) {
      console.log(error);
      res.status(500).json({
        message: "update todo failed",
      });
    }
  },

  async deleteTodo(req, res) {
    try {
      const id = req.params.todoListId;
      if (!id) throw new Error("id not defined");
      const todo = await TodoModel.findByIdAndDelete(id);
      return responseSuccess(req, res, todo);
    } catch (err) {
      console.log(error);
      res.status(500).json({
        message: "update todo failed",
      });
    }
  },
};
