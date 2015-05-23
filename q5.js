var q = require('q');
var def = q.defer();

def.promise.then(function(name){
  return "DR. " + name;
}).then(function(name){
  console.log(name)
});


def.resolve("MANHATTAN");