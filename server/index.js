const express = require("express");

const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: "Read Lab 14 guide", status: "done" },
  { id: 2, title: "Create Postman tests", status: "doing" },
];
let nextId = 3;

app.get("/health", (_req, res) => res.json({ ok: true, service: "lab14-api" }));
app.get("/tasks", (_req, res) => res.json(tasks));
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === Number(req.params.id));
  return task ? res.json(task) : res.status(404).json({ error: "Task not found" });
});
app.post("/tasks", (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: "title is required" });
  const task = { id: nextId++, title: req.body.title, status: req.body.status || "todo" };
  tasks.push(task);
  return res.status(201).json(task);
});
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;
  return res.json(task);
});
app.patch("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  if (req.body.status) task.status = req.body.status;
  return res.json(task);
});
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((item) => item.id !== Number(req.params.id));
  return res.status(204).send();
});

const port = process.env.PORT || 3000;
if (require.main === module) app.listen(port, () => console.log(`Lab14 API: ${port}`));
module.exports = app;
