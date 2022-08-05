const path = require("path");

const getMessages = (req, res) => {
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "kålpudding.jpeg")
  // );
  res.render("messages", {
    title: "Messages to users",
    user: "Tommy Gunn",
  });
};

const postMessage = (req, res) => {
  console.log("Updating messages...");
};

module.exports = {
  getMessages,
  postMessage,
};
