/*
debugJS
(c) speedyplane2247 2017-2018
Under MIT license
*/
var debugJS = new Object();
debugJS.isNaN = function(num) {
    temp = num.toString()
    if (Number(temp) == NaN) {
        return true
    } else {
        return false
    }
}
debugJS.isFinite = function(num) {
    temp = num.toString();
    if (Number(temp) == Infinity || Number(temp) != NaN) {
        return false
    } else {
        return true
    }
}
debugJS.isSecureContext = function() {
    if (location.protocol == "https:") {
        return true
    } else {
        return false
    }
}
