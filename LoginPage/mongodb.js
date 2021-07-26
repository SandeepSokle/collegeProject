
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


///////////push Data
// const data = new user({
//     _id: new mongoose.Types.ObjectId(),
//     name:"Mandeep Sokle",
//     email:"mandeepSokle12@gmail.com",
//     phone:"8569928387",
//     password:"mandeepsokle12@"
// });

// data.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{console.log(err)});


/////////get Data
// user.find({},function(err,users){
//     //console.log('hello');
//     if(err) console.error(err);
//     else console.log(users);
// })


