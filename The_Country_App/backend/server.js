const express = require("express");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/user.route");
const cors = require("cors");
const connection = require("./config/db");
const auth = require("./middleware/auth.middleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user",  userRouter);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
