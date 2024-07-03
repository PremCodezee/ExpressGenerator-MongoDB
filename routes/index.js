var express = require("express");
var router = express.Router();
const userModel = require("./users");


// // cookie

// router.get("/", function (req, res, next) {
//   res.cookie("username", "john cena", { maxAge: 900000, httpOnly: false });
//   console.log(req.cookies);
//   res.render(`index`, { title: "Express" });
// });

// router.get("/checkCookie", function (req, res) {
//   console.log(req.cookies);
//   res.send(req.cookies);
// });

// router.get("/deleteCookie", function (req, res) {
//   res.clearCookie("username");
//   console.log(req.cookies);
//   res.redirect("/checkCookie");
// })


// session
// router.get("/", function (req, res, next) {
//   req.session.banned = true;
//   console.log(req.session);
//   res.render("index", { title: "Express" });
// });

// router.get("/checkBan", function(req, res) {
//   if (req.session.banned === true) {
//     res.send("you are banned");
//   } else {
//     res.send("you are not banned");
//   }
// })

// router.get("/removeBan", function(req, res) {
//   req.session.destroy((err) => {
//     if (err) {
//       console.log(err);
//     }
//     // check ban
//     res.redirect("/checkBan");
//   })
// })


// mongo
// router.get("/create", async function (req, res) {
//   const createdUser = await userModel.create({
//     name: "john cena",
//     email: "johncena@gmail.com",
//     age: 10,
//   });

//   res.send(createdUser);
// });

// router.get("/read", async function (req, res) {
//   const users = await userModel.find();
//   // find is to get all users
//   // instead find you can use findOne to find only one data
//   // const user = await userModel.findOne({ name: "john cena" });
//   res.send(users);
// });

// router.get("/update", async function (req, res) {
//   const updatedUser = await userModel.findOneAndUpdate(
//     { name: "john cena" },
//     { name: "john cena updated" }
//   );

//   res.send(updatedUser);
// });

// router.get("/delete", async function (req, res) {
//   const deletedUser = await userModel.findOneAndDelete({ name: "test" });

//   res.send(deletedUser);
// });

module.exports = router;
