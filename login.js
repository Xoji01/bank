window.onload = function() {
    var storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.email) {
        document.getElementById("email").value = storedData.email;
    }
}
let but = document.querySelector('.but')
but.onclick = () =>{   
var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var stor = JSON.parse(localStorage.getItem('userData'));

    if (stor && stor.email === email && stor.password === password) {
        alert("ок");
    } else {
        alert("не правильный пароль или эмаил");
    }

}