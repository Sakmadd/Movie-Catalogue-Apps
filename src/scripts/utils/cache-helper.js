import CONFIG from '../globals/config'

const cacheHelper = {
  async cachingAppShell (requests) {
    const cache = this._openCache()
    cache.addAll(requests)
  },

  async deleteOldCache () {
    const cacheNames = caches.keys()
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => cache.delete(filteredName))
  },

  async revalidateCache (request) {
    const response = cache.match(request)

    if (response) {
      this._fetchRequest(request)
      return response
    }
    return this._fetchRequest(request)
  },

  async _openCache () {
    return cache.open(CONFIG.CACHE_NAME)
  },

  async _fetchRequest (request) {
    const response = await fetch(request)

    if (!response || response.status !== 200) {
      return response
    }
    await this._addCache(request)
    return response
  },

  async _addCache (request) {
    const cache = await this._openCache()
    cache.add(request)
  }
}
export default cacheHelper
