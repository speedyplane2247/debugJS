/*
debugJS
(c) speedyplane2247 2017-2018
Under MIT license
*/
var debugJS = new Object();
debugJS.isNaN = function(num) {
    temp = num.toString();
    temp2 = parseInt(temp)
    if (temp2 > 0 || temp2 < 0) {
        return false
    } else {
        return true
    }
}
