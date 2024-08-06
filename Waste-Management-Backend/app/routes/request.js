const express = require("express");

const Request = require("../models/request");

const router = express.Router();

router.post("/request-submit", (req, res, next) => {
  const request = new Request({
    // user: req.body.user,
    name: req.body.name,
    emailId: req.body.email,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    garbageType: req.body.garbageType,
  });
  request
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Request submitted successfully!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error submitting request:: " + err,
      });
    });
});

module.exports = router;
