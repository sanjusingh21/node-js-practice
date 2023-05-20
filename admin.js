var express = require("express");
var admin = express();

admin.get("/", function (req, res) {
  console.dir(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send("Admin Homepage");
});

admin.get("/settings", function (req, res) {
  console.dir(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.json({ user: "tobi" });
  //   res.send("Admin Settings");
});

module.exports = admin;
