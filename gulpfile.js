var gulp = require('gulp');
var stubcell = require('gulp-stubcell');
var connect = require('gulp-connect');
var proxy = require('proxy-middleware');
var url = require('url');

gulp.task('connect', function() {
  connect.server({
    root: ['build'],
    port: 9000,
    livereload: true,
    middleware: function(connect, o) {
        return [ (function() {
            var options = url.parse('http://localhost:3000/test');
            options.route = '/test';
            return proxy(options);
        })() ];
    }
  });
});

gulp.task('stubcell', function() {
  stubcell.start({

    basepath: 'api/'
  });
});

gulp.task('default', ['connect', 'stubcell']);
