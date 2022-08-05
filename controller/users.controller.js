const model = require("../models/user.model");

const postUser = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing user name" });
  }
  const newUser = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newUser);
  res.json(newUser);
};

const getUsers = (req, res) => {
  res.json(model);
};

const getUser = (req, res) => {
  const userId = Number(req.params.userId);
  const user = model[userId];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      error: "User does not exist",
    });
  }
};

module.exports = {
  postUser,
  getUsers,
  getUser,
};
