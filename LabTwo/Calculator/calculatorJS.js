function numberInput(num){
    document.numberText.textview.value = document.numberText.textview.value+num;
}
function equals(){
    let x = document.numberText.textview.value;
    let answer = eval(x);
    document.numberText.textview.value = answer;
}

function clearFunc(){
    document.numberText.textview.value = " ";
}








/*
function clearFunction(){
    outputArea = document.getElementById('output');
    clearButton = getElementById('clear');
    clearButton.addEventListener('click', function(){
        outputArea.innerHTML = '0';
    });

}

function event1(x){
    document.getElementById('sum').value+=x;
    outputArea.innerHTML = getElementById('sum').value;
}
function event2(){
    var x = document.getElementById('sum').value;
    var res = document.getElementById('sum').value = eval(x);

    document.getElementById('showResult').innerHTML = res;
    outputArea.innerHTML = res;
}*/
/*
function numFunction() {


var x = document.getElementById("btn").value;
var y = document.getElementById("btn").value;
var q = document.getElementById("func").value;

let sum = (x + q + y);
var result = document.getElementById("equals").eval(sum);

document.getElementById('showResult').innerHTML = result;

}*/