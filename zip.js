var fs = require('fs'),
    files = require('shelljs').ls('-R', process.cwd()),
    archive = new (require('node-native-zip'))();

function File (filename) {
  console.log('new file!');
  this.name = filename;
  this.path = './' + filename;
}

exports.make = function (files, cb) {
  if (typeof cb !== 'function') cb = function () {};
  archive.addFiles(
    files.map(function (filename) { return new File(filename); }),
    function (err) {
      if (err) return cb(err, null);
      fs.writeFile('package.zip', archive.toBuffer(), function (err) {
        cb(null, 'package.zip');
      });
    }
  );
}

exports.clean = function () {
  fs.exists('package.zip', function (exists) {
    if (exists) {
      // remove file...
    }
  });
}
