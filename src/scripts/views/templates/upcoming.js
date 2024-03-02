import TheMovieDbSource from '../../data/themoviedb-source.js'

const UpComing = {
  async render () {
    return `
        <h2>Up Coming Page</h2>
      `
  },

  async afterRender () {
    const movies = await TheMovieDbSource.nowPlayingMovies()
    console.log(movies)
  }
}

export default UpComing
