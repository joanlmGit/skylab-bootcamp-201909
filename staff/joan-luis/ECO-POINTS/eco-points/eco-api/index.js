const path = require ('path');
const express=require('express');
const cors = require('cors');
const bodyParser = require('boy-parser');

const postRoute = require('routers/post/index.js')

const app = express();

app.use(cors)

