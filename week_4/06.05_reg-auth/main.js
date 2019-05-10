var base = {};
function go() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("pass_code").value;
    var password2 = document.getElementById("repeat_pass_code").value;
    // var confirm = document.getElementById("confirm").value;
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");


    if (password == password2 && login.includes('@')) {
        form2.style.display = "block";
        form1.style.display = "none";
        base.login = login;
        base.password = password;
        console.log(base);

    } else {
        alert("Error");
    }
}

function go2() {
    var login = document.getElementById("login2").value;
    var password = document.getElementById("pass_code2").value;
    var form3 = document.getElementById("form3");
    if (base.login==login && base.password==password) {
        form3.style.display = "block";
        form2.style.display = "none";
        console.log('i am here')
    } else {
        alert("Error");
    }
}
function go3() {
    form3.style.display = "none";
}
