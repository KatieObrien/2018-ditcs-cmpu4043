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


const clicks = Rx.Observable.fromEvent(document, 'click')
clicks.subscribe(click => console.log(click))