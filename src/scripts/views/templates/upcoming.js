import TheMovieDbSource from '../../data/themoviedb-source.js'
import { createMovieItemTemplate } from './template-creator.js'

const UpComing = {
  async render () {
    return `
        <div class="content">
        <h2 class="content__heading">Upcoming Page</h2>
        <div id="movies" class="movies">
        </div>
      </div>
      `
  },

  async afterRender () {
    const movies = await TheMovieDbSource.upcomingMovies()
    const movieContainer = document.querySelector('#movies')
    movies.forEach(movie => {
      movieContainer.innerHTML += createMovieItemTemplate(movie)
    });
  }
}

export default UpComing
