const express = require("express");
const router = express.Router();
const Hero = require("../model/hero");

//to get superHero
router.get("/:hero", (req, res, next) => {
  let name = req.params.hero;
  Hero.findOne({ name }, (err, getHero) => {
    if (err) return next(err);
    if (!getHero) {
      return res
        .status(401)
        .json({ status: "fail", message: "Hero not found" });
    }
    return res.status(200).json({ status: "success", hero: getHero });
  });
});

//to create superHero
router.post("/", (req, res, next) => {
  Hero.create(req.body, (err, hero) => {
    if (err) return next(err);
    return res.status(201).json({ status: "success", hero });
  });
});

//to update superHero
router.put("/:hero", (req, res, next) => {
  let name = req.params.hero;
  Hero.findOneAndUpdate(
    { name },
    req.body,
    { new: true },
    (err, updatedHero) => {
      if (err) return next(err);
      return res.status(201).json({ status: "success", updatedHero });
    }
  );
});

//to delete superHero
router.delete("/:hero", (req, res, next) => {
  let name = req.params.hero;
  Hero.findOneAndDelete({ name }, (err, deletedHero) => {
    if (err) return next(err);
    return res.status(201).json({ status: "success", deletedHero });
  });
});

module.exports = router;
