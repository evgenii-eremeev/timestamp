var dateformat = require("dateformat");


function convert(time) {
    
    var recognize = function (time) {
        if (time.length <= 12 && Number.isInteger(+time) && +time > 0) {
            return 'unix';
        }
        var date = new Date(time);
        if (date != 'Invalid Date' && +date > 0) {
            return 'natural';
        } else {
            return 'invalid';
        }
    };
    
    var naturalToUnix = function (humanTime) {
        return new Date(humanTime).getTime() / 1000;
    };
    
    var unixToNatural = function (unixTime) {
        var date = new Date(unixTime * 1000);
        return dateformat(date, "mmmm d, yyyy");
    };
    
    if (recognize(time) === 'unix') {
        return {
            unix: +time,
            natural: unixToNatural(time)
        };
    } else if (recognize(time) === "natural") {
        var unixTime = naturalToUnix(time);
        return {
            unix: unixTime,
            natural: unixToNatural(unixTime)
        };
    } else {
        return { unix: null, natural: null };
    }
    
}

module.exports = convert;

console.log(convert('5757778658'));