var q = require('q');
var def = q.defer();

function error (err) {
  console.log(err.message);
}

def.promise.then(null, error);
setTimeout(def.reject, 300, new Error("REJECTED!"));