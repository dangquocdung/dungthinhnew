/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
   
   apiKey: "AIzaSyBAymroWpXvhz2yceUzBu_v8-1j7AmXH54",
   authDomain: "dungthinh-app.firebaseapp.com",
   databaseURL: "https://dungthinh-app.firebaseio.com",
   projectId: "dungthinh-app",
   storageBucket: "dungthinh-app.appspot.com",
   messagingSenderId: "821302224629",
   appId: "1:821302224629:web:f864805ec9f789e96307bc",

});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});