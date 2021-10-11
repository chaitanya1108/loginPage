const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello world from router js`);
});

require("../model/userSchema");
// PROMISES
// router.post("/register",(req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(400).json({ error: "Please fill all the data" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(400).json({ error: "Email already exists" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered succesfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Failed to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(400).json({ error: "Please fill all the data" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();
    
    res.status(201).json({ message: "User registered succesfully" });
    
    } catch (err) {
    console.log(err);
  }
});

//login route
router.post('/signin', async (req,res)=>{
    // console.log(req.body);
    // res.json({message: "nice"});
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(200).json({error: "Please fill the data"});
        }
        const userLogin = await User.findOne({email:email});

        if(!userLogin){
            res.json({error:"User doesn't exist"});
        }
        else{
            res.json({message:"You signed in succesfully"});
        }
        
    }catch(err){
        console.log(err);
    }
});

module.exports = router;
