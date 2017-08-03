var test = require('tape');
var gulp = require('gulp');
var fs = require('fs');
var through = require('through2');
var template = require('./');

test('template process', function(t) {
  var expected = fs.readFileSync('examples/output.html').toString();
  
  gulp
    .src('examples/index.html')
    .pipe(template('examples/template.html'))
    .pipe(through.obj(function(file, enc) {
      var output = file.contents.toString(enc);
      t.equal(output, expected, 'processed content should match expected');
      t.end();
    }));
});
