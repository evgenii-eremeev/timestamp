'use strict';

var Timestamp = require(process.cwd() + '/app/controllers/timestamp.server.js');

module.exports = function (app) {
   var timestamp = new Timestamp();

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });
      
   app.route('/:time')
      .get(timestamp.stamp);

};
