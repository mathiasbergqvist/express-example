const express = require("express");

const usersController = require("../controller/users.controller");

const usersRouter = express.Router();

usersRouter.post("/", usersController.postUser);
usersRouter.get("/", usersController.getUsers);
usersRouter.get("/:userId", usersController.getUser);

module.exports = usersRouter;
