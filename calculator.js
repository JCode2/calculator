/**
 * Created by joshua on 2/8/17.
 */
"use strict";

'use strict';
//Loops instead//

var num = document.getElementsByClassName("number");

var ops = document.getElementsByClassName("op");
var equal = document.getElementById("equal");
var clear = document.getElementById("delete");
var squared = document.getElementById("square");
var signSwitch = document.getElementById("sign");
var percent = document.getElementById("percent");
var mathPercent = display.value;
console.log(display.value);
var i;

for (i = 0; i < num.length; i++) {

    num[i].addEventListener('click', function () {
        document.getElementById("display").value += this.innerText;
    })
}
for (i = 0; i < ops.length; i++) {

    ops[i].addEventListener('click', function () {
        var display = document.getElementById("display");
        var lastCharacter = display.value[display.value.length - 1];
        var operations = "+-*/.";
        // is the last character in the dislay not an operator?
        if (operations.indexOf(lastCharacter) == -1) { // is the last character not in + - * or /
            display.value += this.innerText;
        }
    })
}
clear.addEventListener('click', function () {
    document.getElementById("display").value = "";

});

equal.addEventListener('click', function () {
    document.getElementById("display").value = eval(document.getElementById("display").value);
});

squared.addEventListener('click', function () {
    var display = document.getElementById("display");
    display.value = Math.sqrt(display.value);
});

<!--Not Working Yet-->

percent.addEventListener('click', function () {
    var display = document.getElementById("display");
    display.value = display.value / 100;
});
<!--Switching signs doesn't work-->


signSwitch.addEventListener('click', function () {
    var display = document.getElementById("display");
    display = display.value;
    if (display > 0) {
        display = display.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    }
    else {

    }
});
<!--Stop it from rading out Infinity (Doesn't work yet)-->
/*if (document.getElementById("display").value =(num/0)){
 document.getElementById("display").value = "Don't Do That";
 }*/



/*document.getElementById("delete").addEventListener('click', function () {
 document.getElementById("display").value = " ";
 });
 document.getElementById("1").addEventListener('click', function () {
 document.getElementById("display").value += "1";
 });
 document.getElementById("2").addEventListener('click', function () {
 document.getElementById("display").value += "2";
 });
 document.getElementById("3").addEventListener('click', function () {
 document.getElementById("display").value += "3";
 });
 document.getElementById("4").addEventListener('click', function () {
 document.getElementById("display").value += "4";
 });
 document.getElementById("5").addEventListener('click', function () {
 document.getElementById("display").value += "5";
 });
 document.getElementById("6").addEventListener('click', function () {
 document.getElementById("display").value += "6";
 });
 document.getElementById("7").addEventListener('click', function () {
 document.getElementById("display").value += "7";
 });
 document.getElementById("8").addEventListener('click', function () {
 document.getElementById("display").value += "8";
 });
 document.getElementById("9").addEventListener('click', function () {
 document.getElementById("display").value += "9";
 });
 document.getElementById("0").addEventListener('click', function () {
 document.getElementById("display").value += "0";
 });
 document.getElementById("+").addEventListener('click', function () {
 document.getElementById("display").value += "+";
 });
 document.getElementById("-").addEventListener('click', function () {
 document.getElementById("display").value += "-";
 });
 document.getElementById("*").addEventListener('click', function () {
 document.getElementById("display").value += "*";
 });
 document.getElementById("/").addEventListener('click', function () {
 document.getElementById("display").value += "/";
 });

 document.getElementById(".").addEventListener('click', function () {
 document.getElementById("display").value += ".";});

 document.getElementById("equal").addEventListener('click', function () {
 document.getElementById("display").value = eval(document.getElementById("display").value);
 });*/
