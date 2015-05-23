var q = require('q');
var defer = q.defer();
defer.promise
defer.promise.then(console.log)
setTimeout(null, 300, console.log("RESOLVED!"))

// official solution
// var q = require('q');
// var def = q.defer();

// def.promise.then(console.log)
// setTimeout(def.resolve, 300, "RESOLVED!");