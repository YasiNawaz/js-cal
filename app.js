var firstNumber = parseInt(prompt("enter your first number:"))
var secondNumber = parseInt(prompt("enter your second number:"))
var opretor = prompt("Enter operator");

if(opretor == "*"){
    alert(firstNumber * secondNumber);
}else if (opretor == "-"){
    alert(firstNumber - secondNumber);

}else if (opretor == "+"){
    alert(firstNumber + secondNumber);

}else if (opretor == "/"){
    alert(firstNumber / secondNumber);

}else {
    alert("sorry you are wrong");
}



