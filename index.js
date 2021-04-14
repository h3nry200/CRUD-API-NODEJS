import express from "express";
import consign from "consign";

//const PORT = 3000;
const app = express();
//ini adalah awalan (hapus tanda /* dan */)

/*
//membuaat spasi menggunakan json
app.set("json spaces",4);

app.get("/", (req, res) => res.json({status: "NTask API OK!"}));

//membuat get tasks (localhost:3000/tasks)
app.get("/tasks", (req, res) => {
res.json({
tasks: [
{title: "Buy some shoes"},
{title: "Fix notebook"}
]
});
});

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));module.exports = app;
*/

//app.set("json spaces", 4);
consign()
.include("libs/config.js")
.then("db.js")
//.then("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);
//app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));