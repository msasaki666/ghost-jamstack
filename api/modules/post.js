import apiCore from './core'

const post = {
  async getAll() {
    return await apiCore.posts
      .browse({
        limit: 'all',
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async get(id) {
    return await apiCore.posts
      .read({
        id,
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async getBySlug(slug) {
    return await apiCore.posts
      .read({
        slug,
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async getByTag(tag) {
    return await apiCore.posts
      .browse({
        limit: 'all',
        filter: `tag:${tag}`,
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export default post
