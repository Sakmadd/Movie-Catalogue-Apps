import Detail from "../views/templates/detail"
import NowPlaying from "../views/templates/now-playing"
import Upcoming from "../views/templates/upcoming"

const routes = {
    '/': NowPlaying, 
    '/now-playing': NowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
  };

export default routes