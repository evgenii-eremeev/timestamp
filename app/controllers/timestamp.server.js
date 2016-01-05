'use strict';

var converter = require(process.cwd() + '/app/common/converter.js');


function timestampHandler () {

   this.stamp = function (req, res) {
      var jsonDate = converter(req.params.time);
      res.json(jsonDate);
   };
   

}

module.exports = timestampHandler;
