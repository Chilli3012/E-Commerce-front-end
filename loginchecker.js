function checker(){
    let usernm=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    if(usernm==='admin@admin.com' && pass==='123456')
    {
        alert("Login Successful");
    }
    else{
        alert("Incorrect email or password")
    }
}