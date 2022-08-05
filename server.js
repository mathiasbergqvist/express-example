const express = require("express");
const path = require("path");

const usersRouter = require("./routes/users.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

// Config template engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3333;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());
app.get("/", (req, res) => {
  res.render("index", {
    title: "Swedish cookbook",
    caption: "World famous Kålpudding",
  });
});

// Host static files (for larger applications, use CDN)
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`🚀 Listening on port ${PORT}...`);
});
