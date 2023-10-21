function add() {
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
 
 };
 
function clik(el){
    el.parentNode.removeChild(el);
 };