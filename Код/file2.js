function tomain() {
    var str1 = document.getElementById("password1").value;
    var str2 = document.getElementById("password2").value;
    if (str1 !== str2) {
     alert("Пароли не совпадают")
    }
    else if (isEmpty(str1)) alert("Поле пустое");
    else return location.href='main.html'
}

function isEmail() {
    var str = document.getElementById("login").value;
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if(isEmpty(str)) alert("Поле пустое");
    else if (!re.test(str)) alert("Адрес неверный");
    else tomain()
}
   
function isEmpty(str){
    return (str == null) || (str.length == 0);
}