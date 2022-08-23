// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
// import serviceWorker from '../firebase-messaging-sw'

const vapidKey = 'BIbgh15cbOjFED5Sk-Xmtje6I8HN8ISVdi3P5y9772lNXMOMh8fi7CELGpf5zCPjT3AVsU2hXJ7XHfH15iYYYt0';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxx20bYuAwdYTwyY0fkBJVI8aU6IuDPMI",
  authDomain: "fir-shop-92b1d.firebaseapp.com",
  projectId: "fir-shop-92b1d",
  storageBucket: "fir-shop-92b1d.appspot.com",
  messagingSenderId: "651235769509",
  appId: "1:651235769509:web:df1e993adc033dba44614c"
};

// currentToken = 'cg1adWxTHVXU43oDNUXiIa:APA91bHCq63nG1YbfidJ2AQHBDFDMOlqyZPD_zGKEREhfLa7K-kb7WrHzHLWa9oBut9T4E--g0AGZwgFpKqustuixlPfSfgfnZHkBjm1iHdTj6Ok_1fFSFc-03q3nHg2KHP8_5UQAbsc';
// currentToken = 'fB41c8pNytHWOQhXUCQTob:APA91bF_DsepVIZrLhFB8cJ3TBV9ArMMpHtEiyHNoQj9TMCV1gCRdER0KN4Rohnb5qDbr5YsecUu-6C99lDzPrAsiXH5yT_9Ny8woVC9VIawXI5-taEOB1DPzBPHTnxIrY66dfgCWj7J'

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
export const messaging = getMessaging();


export function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission()
  .then((permission) => {
    if (permission === 'granted') {
      console.log(permission);
      console.log('Notification permission granted.');
      getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            sendTokenToServer(currentToken);
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
    }})
  .catch(err => console.log(err));
  }

const sendTokenToServer = token => {
  console.log(token);
  if(localStorage.getItem('tokenSentToServer')) return;
  // Implementar envio de token al servidor
  console.log('Ha almacenado el token');
  localStorage.setItem('tokenSentToServer', '1');
}
