import apiCore from './core'

const setting = {
  async get() {
    return await apiCore.settings
      .browse({
        limit: 'all',
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export default setting
