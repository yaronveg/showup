import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
// app.use(express.static(`client/build`));

// refer to a scheme and define.
const userSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  profilePicture: String,
  coverPicture: String,
  bio: String,
  skills: [],
  genres: [],
  galleryPictures: [],
  timestamps: [
    {
      year: Number,
      stamps: [
        {
          id: String,
          date: String,
          type: String,
          detail: String,
          text: String,
          subText: String,
          subType: String,
        },
      ],
    },
  ],
  playlist: [{ src: String, title: String, duration: Number }],
  connections: [],
});

// methods
userSchema.methods.fullName = function fullName() {
  const name = this.firstName + " " + this.lastName;
  return name;
};
userSchema.methods.connectionSum = function connectionSum() {
  const total = this.connections.length;
  return total;
};

// compile schema into a Model.
const User = mongoose.model("User", userSchema);

// a "catchall" handler for any request that doesn't match the C.R.U.D. - will send back React's Index.html file.
app.get(!`/api${"*"}` && "*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

////////////// C.R.U.D - CREATE, READ, UPDATE, DELETE //////////////

// READ //
app.get("/api/products", async (req, res) => {
  const term = req.body.term;
  let products = await User.find();
  if (req.query.term) {
    const { term } = req.query;
    products = products.filter(
      (product) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
    );
  }
  res.send(products);
});

// READ product //
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await User.findById(id));
});

// CREATE //
app.post("/api/products", async (req, res) => {
  const { title, price, description, category, image, rating } = req.body;
  const newProduct = {
    title,
    price,
    description,
    category,
    image,
    rating,
  };
  const newProductDocument = new User(newProduct).save();
  res.send(newProduct);
});

// UPDATE //
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updated = await User.findByIdAndUpdate(id, body);
  res.send(updated);
});

// DELETE //
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await User.findByIdAndDelete(id);
  res.send(deleted);
});

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// mongoose.connect("mongodb://localhost:27017/test", async (err) => {
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  async (err) => {
    err ? console.log(err) : app.listen(process.env.PORT || 8000);
    const dbProducts = await User.find();
    if (!dbProducts.length) {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      const newIds = products.map((product) => ({ ...product, id: undefined }));
      User.insertMany(newIds);
    }
  }
);
