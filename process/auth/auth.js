//custome email varification
function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

//sign in
const userSignIn = ()=>{
    const email = $('#userName').val();
    const pass = $('#userPassword').val();

    // Perform validation
    if (!isEmailValid(email)) {
        alert("Username is invalid. It should be at least 4 characters long and contain only letters and numbers.");
    }else {
        firebase
        .auth()
        .signInWithEmailAndPassword(email,pass)
        .then((resp)=>{
            if(!resp.empty){
                firestore
                .collection('roles')
                .where('uname', '==', email)
                .get()
                .then((res) => {
                    res.forEach((doc) => {
                        const data = doc.data();
                        if(data.role == "manager"){
                            location.href = "./man/dashboard.man.php"
                        }else if(data.role == "engineer"){
                            location.href = "./eng/dashboard.eng.php"
                        }else{
                            alert("Somthing went wrong !")
                        }
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
            }else{
                alert("invalied user name or password !")
            }
        })
        .catch((error)=>{
            // console.log(error);
            alert("invalied user name or password !")
        });
    }
}

//sign out
const userSignOut = ()=>{
    firebase
    .auth()
    .signOut()
    .then(function() {
        alert("User has been successfully logged out.");
        window.location.href = "../index.php";
    })
    .catch(function(error) {
        console.error("Error while logging out:", error);
    });
}

//auth checking
firebase.auth().onAuthStateChanged((user) => {
    (!user && window.location.pathname !== "/view/index.php")? 
        window.location.href = "../index.php": "";
});


