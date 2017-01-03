var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config.dev");
var request = require("request");

var app = express();
var compiler = webpack(config);

app.set('port', 5010);

app.use('/data', express.static('data'))

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));







const serviceUrl = process.env.SERVICE_URL ? process.env.SERVICE_URL : "https://preprod.pol.is";

function proxy (req, res) {
  const hostHeader = serviceUrl.replace(/.*\/\//,"");
  const headers =  Object.assign(req.headers, {"origin": serviceUrl, "Origin": serviceUrl, "host": hostHeader, "Host": hostHeader});

  var x = request({
    url: serviceUrl + req.path,
    qs: req.query,
    headers: headers,
    rejectUnauthorized:false,
  });
  req.pipe(x);
  x.pipe(res);
  x.on("error", function(err) {
    console.log("error", err);
    res.status(500).send("proxy error");
  });
}

// proxy everything else
app.get(/^\/api\//, proxy);
app.put(/^\/api\//, proxy);
app.post(/^\/api\//, proxy);



app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening on port ' + port);
});
