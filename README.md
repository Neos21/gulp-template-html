# gulp-template-html : @neos21/gulp-template-html

[![NPM Version](https://img.shields.io/npm/v/@neos21/gulp-template-html.svg)](https://www.npmjs.com/package/@neos21/gulp-template-html)

Gulp plugin uses [@neos21/template-html](https://github.com/Neos21/template-html) to generate static HTML files from templates and content files.


## Installation

```sh
$ npm install @neos21/gulp-template-html
```


## Gulpfile

```javascript
var gulp = require('gulp');
var template = require('@neos21/gulp-template-html');

gulp.task('default', () => {
  return gulp
    .src('content/*.html')
    .pipe(template('templates/template.html'))
    .pipe(gulp.dest('dist'));
});
```


## Example Usage

See the [examples](./examples) directory for an example of how to generate static HTML files from a template.


## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.


## License

See the [LICENSE](./LICENSE) file.


## Author

[Neo](http://neo.s21.xrea.com/) ([@Neos21](https://twitter.com/Neos21))

- [GitHub - gulp-template-html](https://github.com/Neos21/gulp-template-html)
- [npm - @neos21/gulp-template-html](https://www.npmjs.com/package/@neos21/gulp-template-html)


## Links

- [Neo's World](http://neo.s21.xrea.com/)
- [Corredor](http://neos21.hatenablog.com/)
- [Murga](http://neos21.hatenablog.jp/)
- [El Mylar](http://neos21.hateblo.jp/)
- [Neo's GitHub Pages](https://neos21.github.io/)
- [GitHub - Neos21](https://github.com/Neos21/)
