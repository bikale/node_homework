/* 
// Fix the slow function to be asynchronous/non-blocking
function slow(callback) {
  for (let i = 0; i <= 5e8; i++) {}
  if (Math.random() > 0.5) {
    return callback('Error', null);
  }
  callback(null, { id: 12345 });
}
function exec(fn) {
  // Complete the code here to implement chaining with callback
}
exec(slow)
  .done(function(data) {
    console.log(data);
  })
  .fail(function(err) {
    console.log('Error: ' + err);
  });
*/

function slow(callback) {
  setTimeout(() => {
    for (let i = 0; i <= 5e8; i++) {}
  }, 0);

  if (Math.random() > 0.5) {
    return callback('Error', null);
  }
  return callback(null, { id: 12345 });
}
function exec(fn) {
  let obj = {};

  fn(function(err, data) {
    if (err == 'Error') {
      obj.done = function() {
        return {
          fail: function(callFun) {
            callFun(err);
          }
        };
      };
    } else {
      obj.done = function(callFun) {
        callFun(data);
        return { fail: function() {} };
      };
    }
  });

  return obj;
}
exec(slow)
  .done(function(data) {
    console.log(data);
  })
  .fail(function(err) {
    console.log('Error: ' + err);
  });
