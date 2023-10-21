function add() {
    if (num > 20) {alert("Нельзя добавитить больше 20 вопросов")}
    else if (isEmpty(document.getElementById("answer").value) || isEmpty(document.getElementById("question").value)) {alert("Есть пустые поля"); }
    else {
    num += 1;
    var el, s;
    el=document.getElementById("newEl");
    s=el.innerHTML;
    s=s+`<div class="tabl">
    <div><input class="input_qw" type="text" id="question" placeholder="Вопрос"></div>
    <div><td>
        <input class="input_ans" type="text" id="answer" placeholder="Правильный вариант ответа">
        <input class="input_ans" type="text" id="answer" placeholder="Другой вариант ответа">
    </td></div>
    <div><td>
        <input class="input_ans" type="text" id="answer" placeholder="Другой вариант ответа">
        <input class="input_ans" type="text" id="answer" placeholder="Другой вариант ответа">
    </td></div>
</div>`;
    el.innerHTML=s;
    }
 };
 
function clik(el){
    el.parentNode.removeChild(el);
 };

 function isEmpty(str){
    return (str == null) || (str.length == 0);
}

 var num = 0;


 function toSee() {
    if (isEmpty(document.getElementById("answer").value) || isEmpty(document.getElementById("question").value)  || isEmpty(document.getElementById("test_name").value)) {alert("Есть пустые поля"); }
    else return location.href="see_test.html"
 }
