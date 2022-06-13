const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
//port
const port = process.env.PORT || 5000;

//MIDDLE WARE
app.use(cors());
app.use(express.json());