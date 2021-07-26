////   mongodb+srv://sokle:<password>@cluster0.p66oc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//////////////mongodb///////////////////iPVjXVgIWF9MV27s

const user = require("./models/users");
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://sokle:iPVjXVgIWF9MV27s@cluster0.p66oc.mongodb.net/openBoard?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("DataBase Connected Done");
  });

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const urlencoded = bodyParser.urlencoded();
const app = express();
let dataBaseValue = [];

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.post("/", urlencoded, function (req, res) {
  let data = req.body;
  console.log(data);

  ///////////////////////data from DataBase

  user.findOne({ email: `${data.email}` }, function (err, users) {
    //console.log('hello');
    if (err) {
      res.send(
        `<script>alert("you are not resistered! plaese signup first"); window.location.href = "/signup"; </script>`
      );
    } else {
      // console.log(users);
      if (users == undefined) {
        res.send(
          `<script>alert("you are not resistered! plaese signup first"); window.location.href = "/signup"; </script>`
        );
      } else {
        dataBaseValue = users;
        // console.log(dataBaseValue);

        if (dataBaseValue.password.split(",")[0] == data.password) {
          // console.log("Password match");
          if (data.passKeys == `sokle12`) {
            res.send(
              `<script>alert("You are Host Now"); window.location.href = "https://hostopenboard.herokuapp.com/"; </script>`
            );
            // res.location.href = "https://hostopenboard.herokuapp.com/" ;
          } else {
            res.send(
              `<script>alert("You are Client Now"); window.location.href = "https://clientopenboard.herokuapp.com/"; </script>`
            );
            // res.location.href = "https://clientopenboard.herokuapp.com/" ;
          }
        } else {
          res.send(
            `<script>alert("Wrong Password"); window.location.href = "/signup"; </script>`
          );
        }
      }
    }
  });

  //////////////////////////all value stored in dataBase
});

app.get("/", function (req, res) {
  //   console.log(res.query);
  res.render("login");
});

app.post("/signup", urlencoded, function (req, res) {
  let data = req.body;
  console.log(data);

  ////////////////////check data available or not
  user.findOne({ email: `${data.email}` }, function (err, users) {
    //console.log('hello');
    if(users != undefined) {
      res.send(
        `<script>alert("You are already Resistered Please Login or Forget Password"); window.location.href = "/"; </script>`
      ); 
    }else if ((data.name == "")) {
      res.send(
        `<script>alert("Enter your name"); window.location.href = "/signup"; </script>`
      );
    } else if (data.email.indexOf("@") == -1 ) {
      res.send(
        `<script>alert("You Entered Invalid email Address, Please Try Again"); window.location.href = "/signup"; </script>`
      );
    } else if (data.number.length < 10) {
      res.send(
        `<script>alert("You Entered Invalid Phone number, Please Try Again"); window.location.href = "/signup"; </script>`
      );
    } else if (data.password[0].length < 8) {
      res.send(
        `<script>alert("Please enter your password in range 8 - 20"); window.location.href = "/signup"; </script>`
      );
    } else if (data.password[0] != data.password[1]) {
      res.send(
        `<script>alert("Password and Confirm Password does Not Match, Please Try Again"); window.location.href = "/signup"; </script>`
      );
    } else {
        const mongoData = new user({
          _id: new mongoose.Types.ObjectId(),
          name: "" + data.name,
          email: "" + data.email,
          phone: "" + data.number,
          password: "" + data.password,
        });

        mongoData
          .save()
          .then((result) => {
            // console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        res.send(
          `<script>alert("You are Resistered Successfully Please Login"); window.location.href = "/"; </script>`
        );
        // res.render("login");
      }
  });
});

app.get("/signup", function (req, res) {
  //   console.log(res.query);
  res.render("signup");
});

app.post("/forget", urlencoded, function (req, res) {
  let data = req.body;
  // console.log(data.email);
  user.findOne({ email: `${data.email}` }, function (err, users) {
    // console.log(users, err);
    if (users == undefined) {
      // console.log("Notresisterd yet:");
      res.send(
        `<script>alert("You are not Resistered Please Signup"); window.location.href = "/signup"; </script>`
      );
    } else {
      // console.log("resistered!");
      dataBaseValue = users;
      let passwordMassage = `Your Data ::::: Name : ${
        dataBaseValue.name
      } :::: Email : ${dataBaseValue.email} :::: Phone No. : ${
        dataBaseValue.phone
      } :::: Password : ${dataBaseValue.password.split(",")[0]} `;

      res.send(
        `<script>alert("${passwordMassage}"); window.location.href = "/"; </script>`
      );
    }
  });
});

app.get("/forget", function (req, res) {
  //   console.log(res.query);
  res.render("forget");
});

app.get("/welcomeHost", function (req, res) {
  //   console.log(res.query);
  res.render("welcomeHost");
});

app.get("/welcome", function (req, res) {
  //   console.log(res.query);
  res.render("welcome");
});


let port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Server is listening on port 5500");
});