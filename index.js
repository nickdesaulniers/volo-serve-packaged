var fs = require('fs'),
    path = require('path');

module.exports = {
  summary: 'Serve packaged Firefox OS apps for rapid development using volo.',

  //This is a longer form version of the help. markdown
  //is the suggested file format to use.
  doc: fs.readFileSync(path.join(__dirname, 'doc.md'), 'utf8'),

  flags: {
    'p': 'port'
  },

  run: function (d, v, namedArgs, arg1) {
    var port = namedArgs.port ? arg1 : 3000;
    console.log('Will run on port ' + port);
    d.resolve('done');
  }
};
