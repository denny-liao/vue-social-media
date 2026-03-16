// place at : deploy/ghpages.js
// you can see more info at https://github.com/tschaub/gh-pages

// refer to https://hackmd.io/@c36ICNyhQE6-iTXKxoIocg/rkJxgxhDI
// import path, { resolve } from 'path'
import { publish } from 'gh-pages'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/denny-liao/vue-social-media.git', // project github repo
  nojekyll: true,
}

const callback = (err) => {
  if (err) console.error(err)
  else console.log('publish success')
}

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
publish('dist', options, callback)
