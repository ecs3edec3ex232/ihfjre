// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBuykrU6zuK_PAAqdK0suPL5pSApoi-6JU",
  authDomain: "chat-app-5dc7b.firebaseapp.com",
  databaseURL: "https://chat-app-5dc7b-default-rtdb.firebaseio.com",
  projectId: "chat-app-5dc7b",
  storageBucket: "chat-app-5dc7b.appspot.com",
  messagingSenderId: "173554177331",
  appId: "1:173554177331:web:6ed79dd27975eb60f15a46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var username = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome "+username+"!"; 
  console.log(username);


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey
  console.log( "room names-"+Room_names); 
  row ="<div id="+Room_names+"class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  });});}
  getData(); 
  function addRoom(){
    var room_name = document.getElementById("room_name").value; 

    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         document.getElementById("output").innerHTML =room_name; 
         window.location ="Chat_app_page.html";
  }
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location ="Chat_app_page.html";
  }
  function logout(){
    localStorage.removeItem("room_name",name);
    localStorage.removeItem("username",username);
    window.location = "index.html";
    console.log(name);
    console.log("room_name");
    console.log(username);
    console.log("username");
  }





  