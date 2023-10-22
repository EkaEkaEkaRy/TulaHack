function tomain() {
    var str1 = document.getElementById("password").value;
    if (isEmpty(str1)) alert("Поле пустое");
    else return location.href='main.html'
}

function isEmail() {
    var str = document.getElementById("mail").value;
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if(isEmpty(str)) alert("Поле пустое");
    else if (!re.test(str)) alert("Адрес неверный");
    else tomain()
}
   
function isEmpty(str){
    return (str == null) || (str.length == 0);
}

function toChoice() {
    if (isEmpty(document.getElementById("track").value)) {alert("Поле пустое"); }

    else {return location.href="choice.html"}
}