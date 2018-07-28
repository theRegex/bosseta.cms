 const path = require("path");
const port = 3008;
const sha1 = require("sha1");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();


app.engine(".hbs", exphbs({
	defaultLayout: "index", 
	extname: ".hbs",
	layoutsDir: path.join(__dirname, "views")
}));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));  

app.use(express.static("public", 
	{ 
		maxAge: "30 days" , 
		setHeaders: function (res, path, stat) {
   			 res.set("x-timestamp", Date.now());
  		}
	}
))

app.get("*", function(req, res) {
	res.render("index", { version : sha1( Date.now() ) });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



