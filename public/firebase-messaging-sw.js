importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDxx20bYuAwdYTwyY0fkBJVI8aU6IuDPMI",
    authDomain: "fir-shop-92b1d.firebaseapp.com",
    projectId: "fir-shop-92b1d",
    storageBucket: "fir-shop-92b1d.appspot.com",
    messagingSenderId: "651235769509",
    appId: "1:651235769509:web:df1e993adc033dba44614c"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
// Eventos
//  messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: 'https://img.icons8.com/color/480/firebase.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });
