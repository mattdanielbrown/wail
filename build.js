const pug = require('pug')
const path = require('path')
const fs = require('fs-extra')

const here = process.cwd()

const wailHomeOpts = {
  youtubelink: 'https://www.youtube.com/embed/xAovJNO08OI',
  wikilink: 'https://github.com/N0taN3rd/wail/wiki',
  macosdl: 'https://github.com/N0taN3rd/wail/releases/download/1.0.0/WAIL.dmg',
  linuxdl: 'https://github.com/N0taN3rd/wail/releases/download/1.0.0/WAIL-linux-x64-build-u16.04.zip',
  windowsdl: 'https://github.com/N0taN3rd/wail/releases/download/1.0.0/WAIL-win32-x64.zip',
  projectHome: 'https://github.com/N0taN3rd/wail',
}

const compiledFunction = pug.compileFile(path.join(here, 'pug', 'index.pug'), {pretty: true})

fs.writeFileSync(path.join(here, 'index.html'), compiledFunction(wailHomeOpts), 'utf8')
