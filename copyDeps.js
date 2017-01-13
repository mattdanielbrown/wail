const fs = require('fs-extra')
const path = require('path')

const here = process.cwd()

const move = [
  [path.join(here, 'node_modules', 'jquery', 'dist', 'jquery.js'), path.join(here, 'js/jquery.js')],
  [path.join(here, 'node_modules', 'materialize-css', 'dist', 'js', 'materialize.js'), path.join(here, 'js/materialize.js')],
  [path.join(here, 'node_modules', 'materialize-css', 'dist', 'css', 'materialize.css'), path.join(here, 'css/materialize.css')],
  [path.join(here, 'node_modules', 'flex-layout-attribute', 'css', 'flex-layout-attribute.css'), path.join(here, 'css/flex-layout-attribute.css')],
  [path.join(here, 'node_modules', 'font-awesome', 'css', 'font-awesome.css'), path.join(here, 'css/font-awesome.css')],
]

move.forEach(([from, to]) => {
  fs.copySync(from, to)
})

const fawFonts = fs.walkSync(path.join(here, 'node_modules', 'font-awesome', 'fonts'))
fawFonts.forEach(f => {
  let name = path.basename(f)
  fs.copySync(f, path.join(here, 'fonts', name))
})