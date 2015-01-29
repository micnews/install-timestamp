var test = require('tape');
var installTimestamp = require('./');
var fs = require('fs');

test('should return current timestamp if file does not exist', function(t) {
  installTimestamp.del();
  var now = Date.now;
  Date.now = function() { return 1111; };
  var ts = installTimestamp();
  t.equal(ts.slice(0, -3), '1111');
  Date.now = now;
  t.end();
});

test('should return written timestamp if file exists', function(t) {
  installTimestamp.del();
  var now = Date.now;
  Date.now = function() { return 9999; };
  installTimestamp.put();
  Date.now = now;
  var ts = installTimestamp();
  t.equal(ts.slice(0, -3), '9999');
  t.end();
});
