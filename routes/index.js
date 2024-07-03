var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", async function (req, res) {
  const createdUser = await userModel.create({
    name: "john cena",
    email: "johncena@gmail.com",
    age: 10,
  });

  res.send(createdUser);
});

router.get("/read", async function (req, res) {
  const users = await userModel.find();
  // find is to get all users
  // instead find you can use findOne to find only one data
  // const user = await userModel.findOne({ name: "john cena" });
  res.send(users);
});

// router.get("/update", async function (req, res) {
//   const updatedUser = await userModel.findOneAndUpdate(
//     { name: "john cena" },
//     { name: "john cena updated" }
//   );

//   res.send(updatedUser);
// });

router.get("/delete", async function (req, res) {
  const deletedUser = await userModel.findOneAndDelete({ name: "test" });

  res.send(deletedUser);
});

module.exports = router;
