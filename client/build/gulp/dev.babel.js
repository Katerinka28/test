import gulp from 'gulp'

import { P as p, R as r } from '../paths'

import Copy from './tasks/copy'
import Sass from './tasks/sass'
import Pug from './tasks/pug'

import SvgFont from './tasks/svgfonts'
import ImageMin from './tasks/imagemin'

let imagemin = new ImageMin({
  src: p.dest.public,
})

let svgfonts = new SvgFont({
  src: `${p.src.public}svg/*.svg`,
  glob: `${p.src.public}**/*.svg`,
  dest: `${p.dest.public}fonts/`,
  styl: `${p.src.sass}project/`
})

let pub = new Copy({
  src: [`${p.src.public}**/*`, `!${p.src.public}svg/`],
  glob: [`${p.src.public}**/*`, `!${p.src.public}svg/`],
  dest: p.dest.public
})

let sass = new Sass({
  src: `${p.src.sass}style.sass`,
  glob: `${p.src.sass}**/*.sass`,
  dest: p.dest.sass
})

let template_src = [
  `${p.src.pug}templates/**/*.pug`,
  `!${p.src.pug}templates/**/_*.pug`,
]
let templates = new Pug({
  src: template_src,
  basedir: `${p.src.pug}templates/`,
  glob: template_src,
  dest: p.dest.pug,
  extension: '.jinja',
})


gulp.task('svgfonts', svgfonts.binded('dev'))
gulp.task('public', pub.binded('dev'))
gulp.task('sass', sass.binded('dev'))
gulp.task('templates', templates.binded('dev'))


gulp.task('public:build', pub.binded('build'))
gulp.task('sass:build', sass.binded('build'))
gulp.task('templates:build', templates.binded('build'))
gulp.task('imagemin:build', imagemin.binded('build'))

gulp.task('watch', ['svgfonts', 'public', 'sass', 'templates'], (done) => {
  svgfonts.watch('svgfonts')
  pub.watch('public')
  sass.watch('sass')
  templates.watch('templates')
  done()
})

gulp.task('build', [
  'public:build', 'sass:build', 'templates:build', 'imagemin:build'
])

gulp.task('default', ['watch'])
