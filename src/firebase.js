
  // Initialize Firebase
export function initializeFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBEVNyt3a4I-8IYN0RhJ8t1k3I8RLKv7X0",
        authDomain: "askliv-app.firebaseapp.com",
        databaseURL: "https://askliv-app.firebaseio.com",
        projectId: "askliv-app",
        storageBucket: "askliv-app.appspot.com",
        messagingSenderId: "907722564937",
        appId: "1:907722564937:web:10139c264c85503c2ee698",
        measurementId: "G-2FY7P9NY4H"
      };

      window.firebase.initializeApp(firebaseConfig);
    window.firebase.analytics();
}
