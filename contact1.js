// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA51nR-2slMgRZtmq0UTeqfw1INymsSwh0",
    authDomain: "rama-glass-house.firebaseapp.com",
    databaseURL: "https://rama-glass-house-default-rtdb.firebaseio.com",
    projectId: "rama-glass-house",
    storageBucket: "rama-glass-house.appspot.com",
    messagingSenderId: "632297044553",
    appId: "1:632297044553:web:2551ebb97c5c78ad181d98",
    measurementId: "G-N25EFDV6XL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  // Listen for form submit

var messageRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name-b381");
    var email = getInputVal("email-b381");
    var subject = getInputVal("subject-b381");
    var message = getInputVal("text-b381");


    saveMessage(name, email, subject, message);

     // show alert
     document.querySelector('.alert').style.display = 'block';

     // Save messages
     setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    }, 2000);

  document.getElementById('contactForm').reset(); 
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, subject, message){
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}
