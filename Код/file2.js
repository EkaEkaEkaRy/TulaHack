function tomain() {
    var str1 = document.getElementById("password1").value;
    var str2 = document.getElementById("password2").value;
    if (str1 !== str2) {
     alert("Пароли не совпадают")
    }
    else return location.href='main.html'
}