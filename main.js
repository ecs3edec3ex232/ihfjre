function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="Chat_app_room.html";

}