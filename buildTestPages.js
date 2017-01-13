const pug = require('pug')
const path = require('path')
const fs = require('fs-extra')

const here = process.cwd()
const pugDir = path.join(here, 'pug')

const simpleOpts = {
  rim: 'https://avatars1.githubusercontent.com/u/4416806?v=3&s=200',
  sdl1: 'http://n0tan3rd.github.io/wail/sameD1.html',
  sdl2: 'http://n0tan3rd.github.io/wail/sameDomain2.html',
  sdl3: 'http://n0tan3rd.github.io/wail/sameDomain3.html',
  edl1: 'https://github.com/oduwsdl',
  edl2: 'http://ws-dl.blogspot.com/',
  edl3: 'https://ws-dl.cs.odu.edu/',
}

const sameDLOpts = [
  {
    stylel: 'css/sd1.css',
    pnum: 1,
    includeJs: true,
    includeCss: true,
    mat: true,
    jsf: 'js/sd1.js',
    which: 'sameDomain1.html',
    rim: 'http://www.cs.odu.edu/~mkelly/mofro.png',
    lim: 'images/checkSeed.png',
    sdl1: 'http://n0tan3rd.github.io/wail/simple.html',
    sdl2: 'http://n0tan3rd.github.io/wail/sameDomain2.html',
    sdl3: 'http://n0tan3rd.github.io/wail/sameDomain3.html',
    edl1: 'http://www.cs.odu.edu/~mkelly',
    edl2: 'http://www.cs.odu.edu/~mweigle',
    edl3: 'http://www.cs.odu.edu/~mln'
  },
  {
    stylel: 'css/sd1.css',
    pnum: 1,
    includeJs: true,
    includeCss: true,
    mat: true,
    jsf: 'js/sd1.js',
    which: 'sameD1.html',
    rim: 'http://www.cs.odu.edu/~mkelly/mofro.png',
    lim: 'images/checkSeed.png',
    sdl1: 'http://n0tan3rd.github.io/wail/simple.html',
    sdl2: 'http://n0tan3rd.github.io/wail/sameDomain2.html',
    sdl3: 'http://n0tan3rd.github.io/wail/sameDomain3.html',
    edl1: 'http://www.cs.odu.edu/~mkelly',
    edl2: 'http://www.cs.odu.edu/~mweigle',
    edl3: 'http://www.cs.odu.edu/~mln'
  },
  {
    stylel: 'css/sd2.css',
    pnum: 2,
    includeCss: true,
    matFa: true,
    which: 'sameDomain2.html',
    rim: 'http://www.cs.odu.edu/~mweigle/pics/mweigle-ODU.jpg',
    lim: 'images/checkSeed.png',
    sdl1: 'http://n0tan3rd.github.io/wail/sameDomain3.html',
    sdl2: 'http://n0tan3rd.github.io/wail/dummy1.html',
    sdl3: 'http://n0tan3rd.github.io/wail/dummy2.html',
    edl1: 'http://www.cs.odu.edu/~salam',
    edl2: 'http://www.cs.odu.edu/~sainswor',
    edl3: 'http://www.cs.odu.edu/~sjone'
  },
  {
    pnum: 3,
    which: 'sameDomain3.html',
    rim: 'http://www.cs.odu.edu/~mln/images/mln-ad-100x130.jpg',
    lim: 'images/checkSeed.png',
    sdl1: 'http://n0tan3rd.github.io/wail/sameDomain1.html',
    sdl2: 'http://n0tan3rd.github.io/wail/dummy3.html',
    sdl3: 'http://n0tan3rd.github.io/wail/sameDomain2.html',
    edl1: 'http://www.cs.odu.edu/~lalkwai',
    edl2: 'http://www.cs.odu.edu/~maturban',
    edl3: 'http://www.cs.odu.edu/~anwala'
  }
]

const dummyConfigs = [
  {
    pnum: 1,
    which: 'dummy1.html'
  },
  {
    pnum: 2,
    which: 'dummy2.html'
  },
  {
    pnum: 3,
    which: 'dummy3.html'
  }
]

const compiledFunction = pug.compileFile(path.join(pugDir, 'simple.pug'), {pretty: true})

fs.writeFileSync(path.join(here, 'simple.html'), compiledFunction(simpleOpts), 'utf8')

const tpCompileFun = pug.compileFile(path.join(pugDir, 'sameDomainPage.pug'), {pretty: true, baseDir: pugDir})

sameDLOpts.forEach(config => {
  fs.writeFileSync(path.join(here, config.which), tpCompileFun(config), 'utf8')
})

const dummyCompileFun = pug.compileFile(path.join(pugDir, 'dumyPage.pug'), {pretty: true, baseDir: pugDir})

dummyConfigs.forEach(config => {
  fs.writeFileSync(path.join(here, config.which), dummyCompileFun(config), 'utf8')
})
