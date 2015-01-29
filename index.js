var fs = require('fs');
var path = require('path');
var filename = path.resolve(__dirname, 'install-timestamp');

module.exports = function() {
  try {
    return parseInt(fs.readFileSync(filename, 'utf8'), 10);
  } catch (e) {
    return Date.now();
  }
};

module.exports.put = function() {
  fs.writeFileSync(filename, String(Date.now()));
};

module.exports.del = function() {
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
};

module.exports.filename = filename;
