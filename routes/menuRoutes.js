const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/menuItem");

router.post("/", async (req, res) => {
  try {
    const item_list = req.body;
    const menuList = new MenuItem(item_list);
    const response = await menuList.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json(data);
    console.log("data fetched");
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});

router.get("/:itemtaste", async (req, res) => {
  try {
    const itemtaste = req.params.itemtaste;
    if (itemtaste == "sweet" || itemtaste == "sour" || itemtaste == "spicy") {
      const response = await MenuItem.find({ taste: itemtaste });
      res.status(200).json(response);
    } else {
      res.status(200).json({ err: "invalid itemtaste type" });
    }
  } catch (err) {
    res.status(500).json({ err: "internal server Error" });
  }
});

module.exports = router;
