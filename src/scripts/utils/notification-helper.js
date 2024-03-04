const NotificationHelper = {
    sendNotification({title,option}){
        if(!this._checkAvailability()){
            console.log('Website Not Available For Notification!')
            return
        }
        if(!this._checkPermission()){
            console.log('user did not yet granted permission')
        }
        this._showNotification({title,option})
    },

    _checkAvailability() {
        return 'Notification' in window;
      },
    _checkPermission(){
        return Notification.permission == 'granted'
    },

    async _requestPermission(){
        const status = await Notification.requestPermission()
        
        if(status === 'denied'){
            console.log('Notification Denied!')
        }if(status === 'default'){
            console.log('Permission Closed')
        }
    },

    async _showNotification({title,option}){
        const serviceWorkerRegistration = await navigator.serviceWorker.ready
        serviceWorkerRegistration.showNotification(title,option)
    }
}
export default NotificationHelper 