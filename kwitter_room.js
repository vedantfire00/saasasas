const config={

      apiKey: "AIzaSyCnnX_WY8OZNCGku4Ptyj221yyyynhlxN4",
      authDomain: "tbestb-6ab05.firebaseapp.com",
      databaseURL: "https://tbestb-6ab05-default-rtdb.firebaseio.com",
      projectId: "tbestb-6ab05",
      storageBucket: "tbestb-6ab05.appspot.com",
      messagingSenderId: "1067857637005",
      appId: "1:1067857637005:web:cedcd8acc44aedd4dafcc4",

};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
function lo()
{
    window.location="index.html";
}
document.getElementById("hh").innerHTML="hello "+ user_name;