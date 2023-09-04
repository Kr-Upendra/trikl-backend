import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Happy Coding!",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `requested url ${req.originalUrl} doesn't exist on this server!`,
  });
});

export default app;
