"use strict";
const router = require("express").Router();
const { wizardingSchools, student} = require("../db/index");

// require your database and place your routes here

router.get("/students", async (req, res, next) => {
  try {
    const students = await student.findAll();
    res.send(students);
  } catch (err) {
    next(err);
  }
});

router.get("/students/:id", async (req, res, next) => {
  try {
    const student = await student.findOne({
      where: { id: req.params.id },
      include: wizardingSchools,
    });

    console.log(student);

    res.send(student);
  } catch (err) {
    next(err);
  }
});

router.get("/schools", async (req, res, next) => {
  try {
    const student = await wizardingSchools.findAll();
    res.send(student);
  } catch (err) {
    next(err);
  }
});

router.get("/schools/:id", async (req, res, next) => {
  try {
    const student = await wizardingSchools.findByPk(req.params.id);
    res.send(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
