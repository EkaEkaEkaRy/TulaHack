import {mas} from "add_test.js"

window.onload = ()=>
{
    document.querySelector("#first").textContent = mas[0];
    document.querySelector("#Button1").addEventListener("click", function (event)
    {
        document.querySelector("#first").textContent = mas[0];
    })
}



