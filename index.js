var express = require("express"),
  app = express();

app.use(express.static(__dirname));

var server = app.listen(8000, function () {
  console.log("app listening at port 8000");
});


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
})
