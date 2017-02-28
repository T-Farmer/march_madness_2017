console.log("app.js is loaded")

const app = angular.module('tourneyBracketApp', ['ngRoute'])

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyAZFSrJJZuA-gtUiTZmfuzDdZPeGy8Lg9U",
    authDomain: "marchmadnesscapstone.firebaseapp.com",
    databaseURL: "https://marchmadnesscapstone.firebaseio.com",
    storageBucket: "marchmadnesscapstone.appspot.com",
    messagingSenderId: "1005561043415"
  });
