import CONFIG from '../globals/config'
import NotificationHelper from './notification-helper'

const webSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },

  _onMessageHandler (message) {
    const movie = JSON.parse(message.data)

    NotificationHelper.sendNotification({
      title: `${movie.title} is on Cinema!`,
      option: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`
      }
    })
  }

}
export default webSocketInitiator
