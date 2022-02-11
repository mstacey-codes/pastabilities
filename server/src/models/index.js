// include all of your models here using CommonJS requires
const User = require("./User.js");
const Category = require("./Category.js");
const Pasta = require("./Pasta.js");
const Vote = require("./Vote.js")
const Review = require("./Review.js")

module.exports = { User, Category, Pasta, Vote, Review };
