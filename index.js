const express = require("express");
const cors = require("cors");
const pool = require("./config");
const app = express();



app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
      message: "Something went rely wrong",
    });
  });
  app.use(cors());
  
  app.get("/label", (req, resp) => {
    pool.query("select * from Label", (err, result) => {
      if (err) { resp.send("error in api") }
      else { resp.send(result) }
    })
  });
  const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server is running succesfully on PORT ${PORT}`))