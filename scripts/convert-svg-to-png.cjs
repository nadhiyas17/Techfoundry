// CommonJS converter for environments with "type": "module" in package.json
const fs = require('fs')
const path = require('path')
(async function run(){
  try{
    const sharp = require('sharp')
    const root = path.resolve(__dirname, '..')
    const assets = path.join(root, 'public', 'assets')
    const svgs = ['software-engineering.svg']
    for (const s of svgs) {
      const inPath = path.join(assets, s)
      const outPath = path.join(assets, s.replace(/\.svg$/i, '.png'))
      if (!fs.existsSync(inPath)) {
        console.warn('Missing', inPath)
        continue
      }
      console.log('Converting', inPath, '->', outPath)
      await sharp(inPath).png({quality:90}).toFile(outPath)
      console.log('Saved', outPath)
    }
  }catch(err){
    console.error('Conversion failed:', err)
    process.exitCode = 1
  }
})()
