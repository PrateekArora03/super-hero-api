const express = require("express");
const router = express.Router();
const Hero = require("../model/hero");

router.get("/:hero", (req, res, next) => {
  let hero = req.params.hero;
  Hero.findOne({ name: hero }, (err, getHero) => {
    if (err) return next(err);
    if (!getHero) {
      return res
        .status(401)
        .json({ status: "fail", message: "Hero not found" });
    }
    return res.status(200).json({ status: "success", hero: getHero });
  });
});

module.exports = router;
