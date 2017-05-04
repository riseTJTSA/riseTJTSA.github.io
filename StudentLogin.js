var userId = "NOT A VALID USER";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC54QaF7lPx-tYYARGNXWlpD6EmZp2cXXk",
    authDomain: "rise-student.firebaseapp.com",
    databaseURL: "https://rise-student.firebaseio.com",
    projectId: "rise-student",
    storageBucket: "rise-student.appspot.com",
    messagingSenderId: "936274072255"
  };

  firebase.initializeApp(config);
  const auth = firebase.auth();

  $("#studentloginB").click(function(){
        
        var email = $("#emailStudentLogin").val();  
        var password = $("#pwdStudentLogin").val();
    
        auth.signInWithEmailAndPassword(email, password);
    });

  $("#studentregisterB").click(function(){
        
        var email = $("#emailStudentRegister").val();  
        var password = $("#pwdStudentRegister").val();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        var database = firebase.database();
        promise.catch(e => console.log(e.message));

        auth.onAuthStateChanged(firebaseUser => {
          if (firebaseUser){
              userId = auth.currentUser["uid"];
              writeUserData(userId, $("#nameStudentRegister").val(), $("#emailStudentRegister").val(), $("#locStudentRegister").val())
              console.log($("#nameStudentRegister").val());
              console.log($("#emailStudentRegister").val());
              console.log($("#locStudentRegister").val());
          }
          else{
              console.log("no one is logged on");
          }
      });
    });

function writeUserData(userID, name1, email1, address1) {
  database.ref('users/' + userId).set({
    name: name1,
    email: email1,
    location:address1
  });
}