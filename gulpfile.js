var gulp = require('gulp');
var gib = require('gib');
var historyApiFallback = require('connect-history-api-fallback');

gib(gulp, {
  server: {
    root: './public',
    middleware: [historyApiFallback()]
  },
  browserify: {
    src: './src/index.js',
    dest: './public/app.js'
  },
  less: {
    src: './src/index.less',
    dest: './public/app.css'
  }
});
