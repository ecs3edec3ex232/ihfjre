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
  
  user_name = localStorage.getItem("username");
  room_name =localStorage.getItem("room_name");
  
  function send(){
      var message =document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:msg, 
         like:0
      });
      document.getElementById("msg").innerHTML =""; 
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4>"+name+" </h4>"; 
message_with_tag="<h4 class='message_h4'>"+message+"<h4>";
button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";

var row=name_with_tag+message_with_tag+button+span_with_tag;
document.getElementById("output").innerHTML +=row; 


//End code
 } });  }); }
getData();

function updateLike(message_id){
 console.log(message_id+"liked this message");
 button_id=message_id;
 likes=document.getElementById(button_id).value;
 updated_likes= Number(likes)+ 1; 
 console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
 });
}

 function logout(){
       localStorage.removeItem("add_room",name);
       localStorage.removeItem("user_name",username);
       window.location.replace("index.html"); 
       }