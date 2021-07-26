

app.post("/", urlencoded, function (req, res) {
  let data = req.body;

  console.log(data);

  if (data.password != undefined) {
    //////////////////////login page
    if (data.passKeys != undefined) {
      ///////////////////user is host
    } else {
      ///////////////////user is client
    }
  } else if (data.name != undefined) {
    ///////signup

    const mongoData = new user({
      _id: new mongoose.Types.ObjectId(),
      name: data.name,
      email: data.email,
      phone: data.number,
      password: data.password[0],
    });

    console.log(mongoData);

    mongoData
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    /////////////////////////forget
  }

  res.render("welcome");
});
