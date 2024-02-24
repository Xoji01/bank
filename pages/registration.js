let butt = document.querySelector('.butt')
butt.onclick = () => {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;

    var user = {
        email: email,
        name: name,
        surname: surname,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(user));
    window.location.href = 'login.html';
}