function add() {
    if (num > 20) {alert("Нельзя добавитить больше 20 вопросов")}
    else if (isEmpty(document.getElementById("time").value) || isEmpty(document.getElementById("answer4").value) || isEmpty(document.getElementById("answer3").value) || isEmpty(document.getElementById("answer2").value) || isEmpty(document.getElementById("answer1").value) || isEmpty(document.getElementById("question").value)) {alert("Есть пустые поля"); }
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
var mas = []

 function toSee() {
    if (isEmpty(document.getElementById("time").value) || isEmpty(document.getElementById("answer4").value) || isEmpty(document.getElementById("answer3").value) || isEmpty(document.getElementById("answer2").value) || isEmpty(document.getElementById("answer1").value) || isEmpty(document.getElementById("question").value)  || isEmpty(document.getElementById("test_name").value)) {alert("Есть пустые поля"); }
    else {
        mas.push(document.getElementById("question").value)
        mas.push(document.getElementById("time").value)
        mas.push(document.getElementById("answer1").value)
        mas.push(document.getElementById("answer2").value)
        mas.push(document.getElementById("answer3").value)
        mas.push(document.getElementById("answer4").value)
        
        return location.href="see_test.html"
    }
    
 }



 