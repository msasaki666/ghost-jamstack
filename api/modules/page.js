import apiCore from './core'

const page = {
  async getAll() {
    return await apiCore.pages
      .browse({
        limit: 'all',
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async get(id) {
    return await apiCore.pages
      .read({
        id,
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async getBySlug(slug) {
    return await apiCore.pages
      .read({
        slug,
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async getByTag(tag) {
    return await apiCore.pages
      .browse({
        limit: 'all',
        filter: `tag:${tag}`,
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export default page
