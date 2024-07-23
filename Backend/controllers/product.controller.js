const ProductModel = require("../models/products.model");

const postProduct = async (req, res) => {
  const { title, price, image1, image2, category, related_to, rating } =
    req.body;
  try {
    const product = new ProductModel({
      title,
      price,
      image1,
      image2,
      category,
      related_to,
      rating,
    });
    await product.save();
    res.status(200).send({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal error" });
  }
};

const getProduct = async (req, res) => {
  const { related_to, sort, order, page, limit, category, q, product } =
    req.query;
  let pageSkip = (page - 1) * limit;
  try {
    let products = await ProductModel.find({
      related_to: { $regex: related_to, $options: "i" },
    });
    if (sort == "price") {
      if (order == "asc") {
        products = await ProductModel.find({
          related_to: { $regex: related_to, $options: "i" },
        }).sort({
          price: 1,
        });
      } else if (order == "desc") {
        products = await ProductModel.find({
          related_to: { $regex: related_to, $options: "i" },
        }).sort({
          price: -1,
        });
      }
    } else if (sort == "rating") {
      if (order == "asc") {
        products = await ProductModel.find({
          related_to: { $regex: related_to, $options: "i" },
        }).sort({
          rating: 1,
        });
      } else if (order == "desc") {
        products = await ProductModel.find({
          related_to: { $regex: related_to, $options: "i" },
        }).sort({
          rating: -1,
        });
      }
    }
    if (page) {
      products = await ProductModel.find({
        related_to: { $regex: related_to, $options: "i" },
      })
        .skip(pageSkip)
        .limit(limit);
    }
    if (category) {
      products = await ProductModel.find({
        related_to: { $regex: related_to, $options: "i" },
        category: { $regex: category, $options: "i" },
      });
    }
    if (q) {
      products = await ProductModel.find({
        $or: [
          { title: { $regex: q, $options: "i" } },
          { category: { $regex: q, $options: "i" } },
          { related_to: { $regex: q, $options: "i" } },
        ],
      });
    }
    if (product) {
      products = await ProductModel.find({
        related_to: { $regex: related_to, $options: "i" },
        title: { $regex: product, $options: "i" },
      });
    }
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Internal Error" });
  }
};

const updateProduct = async (req, res) => {
  const {_id} = req.params;
  const { title, price, rating, role } = req.body;
  console.log(_id);
  if (role == "admin") {
    try {
      if (title) {
        await ProductModel.findByIdAndUpdate(
          { _id },
          { $set: { title: title } }
        );
      }
      if (price) {
        await ProductModel.findByIdAndUpdate(
          { _id },
          { $set: { price: price } }
        );
      }
      if (rating) {
        await ProductModel.findByIdAndUpdate(
          { _id },
          { $set: { rating: rating } }
        );
      }
      res.status(200).send({ message: "Product updated Successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Error" });
    }
  } else {
    res.status(403).send({ message: "Not authorised" });
  }
};

const deleteProduct = async (req, res) => {
  const _id = req.params;
  if (role == "admin") {
    try {
      await ProductModel.findByIdAndDelete({ _id });
      res.status(200).send({ message: "Product deleted Successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Error" });
    }
  } else {
    res.status(403).send({ message: "Not authorised" });
  }
};

module.exports = { postProduct, getProduct, updateProduct, deleteProduct };
