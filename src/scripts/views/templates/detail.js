import TheMovieDbSource from '../../data/themoviedb-source.js'

const Detail = {
  async render () {
    return `
        <h2>Detail Page</h2>
      `
  },

  async afterRender () {
    const movies = await TheMovieDbSource.nowPlayingMovies()
    console.log(movies)
  }
}

export default Detail
