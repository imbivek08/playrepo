import express from "express";
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server started at the port 3000"));
