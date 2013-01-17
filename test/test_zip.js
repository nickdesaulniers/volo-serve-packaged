var zip = require('../zip'),
    fs = require('fs'),
    assert = require('assert');

// test make
zip.make(['test_zip.js'], function (err, zipFileName) {
  console.log(err, zipFileName);
  assert.ok(fs.existsSync(zipFileName),
    'Package was not created successfully');

  // test clean
  
});


