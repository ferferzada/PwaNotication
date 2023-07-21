self.addEventListener('push', function(e){
    var options = {
        body : 'this not notificaiton',
        icon : 'images/example.png',
        vibrate:[100,50,100],
        data: {
            dateOfArrival : Date.now(),
            primaryKey: '2'
        },
        actions : [
            {actions: 'explore', title : 'Explore for nothing',
            icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close',
            icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(self.registration.showNotification("OLÁ MUNDIO",options));
});
