// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Portfolio = require('./models/Portfolios');
var Stocks = require('./models/Stocks').stockModel;
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": reason});
}
module.exports = function(app) {

    // server routes
    // handle things like api calls
    //authentication routes

//USERS
    //get all
    app.get('/api/nerds', function(req, res) {
      // use mongoose to get all nerds in the database
      Nerd.find(function(err, nerds) {
        if (err) {
          res.send(err);
        }
        res.json(nerds);
      });
    });

    //get 1
    app.get("/api/nerds/:nerd_id", function(req, res) {
      Nerd.findById(req.params.nerd_id, function(err, nerd) {
        if(err) {
          res.send(err);
        } else {
          res.json(nerd);
        }
      });
    });

    //post
    app.post("/api/nerds", function(req, res) {
      Nerd.create(req.body, function(err, nerd) {
        if (err) {
          res.send(err);
        }
        res.json(nerd);
      });
    });

    //delete
    app.delete("/api/nerds/:nerd_id", function(req, res) {
      Nerd.findByIdAndRemove(req.params.nerd_id, function(err, nerd) {
        if (err) {
          res.send(err);
        }
        res.json(nerd);
      });
    });

//Portfolio
//get all portfolios
    app.get('/api/portfolios', function(req, res) {
      // use mongoose to get all nerds in the database
      Portfolio.find(function(err, portfolios) {
        if (err) {
          res.send(err);
        }
        res.json(portfolios);
      });
    });

    //get 1
    app.get("/api/portfolios/:portfolio_id", function(req, res) {
      Portfolio.findById(req.params.portfolio_id, function(err, nerd) {
        if(err) {
          res.send(err);
        } else {
          res.json(portfolios);
        }
      });
    });

    //post
    app.post("/api/portfolios", function(req, res) {
      Nerd.create(req.body, function(err, portfolios) {
        if (err) {
          res.send(err);
        }
        res.json(portfolios);
      });
    });

    //delete
    app.delete("/api/portfolios/:portfolio_id", function(req, res) {
      Nerd.findByIdAndRemove(req.params.portfolio_id, function(err, portfolios) {
        if (err) {
          res.send(err);
        }
        res.json(portfolios);
      });
    });


    //frontend routes
    //route to handle all angular requests
    app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); //load our public/index.html file
    });

  };
