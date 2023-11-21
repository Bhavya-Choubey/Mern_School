require("dotenv").config();
const mongoose = require("mongoose");
// const mongoURI = process.env.MONGODB_URI;

const cors = require('cors');

const connectToMongo = () => {
  mongoose
    .connect("mongodb+srv://Sneha:Sneha@cluster0.nhxqexb.mongodb.net/test")
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};



// Allow all origins
app.use(cors());

// Allow specific origin(s)
app.use(cors({
  origin: 'https://mern-school-m2nu.vercel.app/'
}));


module.exports = connectToMongo;
