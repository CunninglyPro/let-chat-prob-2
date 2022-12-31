var firebaseConfig = {
    apiKey: "AIzaSyDRJVy671KM-tt4J7_ClGS9V14QRvlDHUs",
    authDomain: "letschat-24e26.firebaseapp.com",
    databaseURL: "https://letschat-24e26-default-rtdb.firebaseio.com",
    projectId: "letschat-24e26",
    storageBucket: "letschat-24e26.appspot.com",
    messagingSenderId: "947373370952",
    appId: "1:947373370952:web:4d827c0b6f46bc95fdf27d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("add_room").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            console.log("Room name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}