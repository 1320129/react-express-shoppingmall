const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Product } = require("../models/Product");

//=================================
//             product
//=================================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/", (req, res) => {
  const product = new Product(req.body);
  product.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/products", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let term = req.body.SearchTerm;
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $lte: req.body.filters[key][0],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  if (term) {
    Product.find(findArgs)
      .find({ $text: { $search: term } })
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, productData) => {
        if (err) return res.status(400).json({ success: false, err });
        return res
          .status(200)
          .json({ success: true, productData, itemlength: productData.length });
      });
    console.log(term);
  } else {
    Product.find(findArgs)
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, productData) => {
        if (err) return res.status(400).json({ success: false, err });
        return res
          .status(200)
          .json({ success: true, productData, itemlength: productData.length });
      });
  }
});

module.exports = router;
