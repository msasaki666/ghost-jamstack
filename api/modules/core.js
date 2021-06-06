import GhostContentAPI from '@tryghost/content-api'

const apiCore = new GhostContentAPI({
  url: process.env.ghostApiUrl,
  key: process.env.ghostApiKey,
  version: 'v3',
})

export default apiCore
