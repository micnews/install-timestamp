var fs = require('fs');
var path = require('path');
var filename = path.resolve(__dirname, 'install-timestamp');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTimestamp() {
  return String(Date.now()) + String(randomInt(100, 999));
}

module.exports = function() {
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch (e) {
    return getTimestamp();
  }
};

module.exports.put = function() {
  fs.writeFileSync(filename, getTimestamp());
};

module.exports.del = function() {
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
};

module.exports.filename = filename;
