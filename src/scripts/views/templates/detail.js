import TheMovieDbSource from '../../data/themoviedb-source.js'
import UrlParser from '../../routes/url-parser.js';
import { createMovieDetailTemplate } from './template-creator.js';

const Detail = {
  async render () {
    return `
        <div id="movie" class="movie"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie')
    movieContainer.innerHTML += createMovieDetailTemplate(movie)
  }
}

export default Detail
