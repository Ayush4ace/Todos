const express = require("express");
const sequelize = require("./config/db.js");
const todoRoutes = require("./routes/todo.routes.js");
const cors = require("cors");

require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use('/api', todoRoutes);
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

sequelize.sync().then(()=>{
    app.listen(3000, ()=>{
        console.log('server is running at port 3000');

    });

}).catch(err=>{
    console.log(err);
});