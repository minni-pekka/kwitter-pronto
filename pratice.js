//ADICIONE OS LINKS DO SEU APP FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyBW36PRYIBais9LcX4zwEllrJLcOVmoE6E",
    authDomain: "kwitter-fd423.firebaseapp.com",
    databaseURL: "https://kwitter-fd423-default-rtdb.firebaseio.com",
    projectId: "kwitter-fd423",
    storageBucket: "kwitter-fd423.appspot.com",
    messagingSenderId: "451994044492",
    appId: "1:451994044492:web:ef84f6d6a46a64f59d0ce9"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuário 


function addUser(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adicionando usuário"});

}