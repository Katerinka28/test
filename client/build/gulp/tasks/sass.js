import gulp from 'gulp'
import * as fs from 'fs'

import Task from './base'
import {
  errorPipeWrapper
} from './utils'


const stylintConfig = JSON.parse(fs.readFileSync('.stylintrc', 'utf8'))
const sassConfig = require('../../config/sass').config
const postcssConfig = require('../../config/postcss').config
const cssoConfig = {
  restructure: true,
  sourceMap: false,
  debug: false,
  usage: {
    blacklist: {}
  }
}

export default class Sass extends Task {
  dev(done) {
    let c = this.config
    let sass = require('gulp-sass')
    let sourcemaps = require('gulp-sourcemaps')
    let postcss = require('gulp-postcss')
    sass.compiler = require('sass')
    return errorPipeWrapper(gulp.src(c.src))

      .pipe(sourcemaps.init())
      .pipe(sass(sassConfig))
      .pipe(postcss(c.postcss || postcssConfig))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(c.dest))
  }

  build(done) {
    let c = this.config
    let sass = require('gulp-sass')
    let postcss = require('gulp-postcss')
    let csso = require('gulp-csso')
    let stylint = require('gulp-stylint')
    sass.compiler = require('sass')

    return gulp.src(c.src)
      .pipe(stylint({
        rules: c.stylint || stylintConfig,
        reporter: {
          reporter: 'stylint-stylish',
          reporterOptions: {
            verbose: true
          }
        }
      }))
      .pipe(stylint.reporter())
      .pipe(sass(sassConfig))
      .pipe(postcss(postcssConfig))
      .pipe(csso(c.csso || cssoConfig))
      .pipe(gulp.dest(c.dest))
  }

  watch(task) {
    let watcher = require('gulp-watch')
    let batch = require('gulp-batch')

    watcher(this.config.glob, batch((events, done) => gulp.start(task, done)))
  }
}
