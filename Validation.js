$("Sign_in").click(function() {
    var initial_password = document.getElementById("password");
    var second_password = document.getElementById("Confirm_password");
    for(var i = 0; i < initial_password.length -1 ; i++){
        if(initial_password[i] != second_password[i]){
            alert("the password was not the same Please enter another");
        }
    }

});