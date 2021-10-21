import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.send("<H1>Server One</H1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
