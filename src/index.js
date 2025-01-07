import express from "express";
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is:${userId}`);
});

app.listen(3000, () => console.log("Server started at the port 3000"));
