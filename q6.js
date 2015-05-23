var q = require('q');
var def = q.defer();

def.promise.then(function parsePromised(json){
  JSON.parse(json)
}).then(null, console.log);