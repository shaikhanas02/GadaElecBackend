const User = require("../schema/user-schema");
const AdminUser = require("../schema/admin-schema");
const multer = require("multer"); // Import multer for file uploads

const Register = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Resgistration Failed",
    });
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    res.status(200).json({
      message: "Login Successful",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      error: "Login Failed",
    });
  }
};

const Admin = async (req, res) => {
  console.log(req.body);
  const ImageName = req.file.filename;
  try {
    const { title, price, category } = req.body;
    await AdminUser.create({ image: ImageName, title, price, category });

    res.status(200).json({
      message: "Image uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Upload Failed",
    });
  }
};


const getProducts = async (req, res) => {
  try {
    AdminUser.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
}; 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/images"); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

module.exports = { Register, Login, Admin, storage, getProducts };
