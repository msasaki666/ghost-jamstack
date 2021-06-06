import apiCore from './core'

const tag = {
  async getAll() {
    return await apiCore.tags
      .browse({
        limit: 'all',
        include: 'count.posts',
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async get(id) {
    return await apiCore.tags
      .read({
        id,
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async getBySlug(slug) {
    return await apiCore.tags
      .read({
        slug,
        include: 'count.posts',
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export default tag
