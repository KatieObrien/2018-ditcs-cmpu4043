import { fromEvent, merge, pipe, subscribe } from "rxjs";
import { mapTo, scan, startWith } from "rxjs/operators";
import "./Counter.css";
import { runInContext } from "vm";

function Calculator(){
    const display = Display();
    const buttons = Button["(",")","&plusmn","&divide","1","2","3","*","4","5","6","-","7","8","9","+","0","."];
    const equalsBtn = Button["="];
    const clearFunc = Clear();
    for(let component of [display, buttons, clearFunc]){
        container.appendChild(component);
    }
    container.classList.add("calculator");
    run(display,buttons,clearFunc);
    return container;
}

function run(display,buttons,clearFunc){
    merge(
        fromEvent(buttons, "click").pipe(mapTo(calculator => ({value: document.numberText.textview.value = document.numberText.textview.value+num}))),
        fromEvent(clearFunc, "click").pipe(mapTo(calculator => ({ value: document.numberText.textview.value = " "}))),
    )
    .pipe(
        startWith({ value: Number(display.value)}),
        scan((acc, update) => update(acc))
    )
    .subscribe(calculator => {
        display.value = calculator.value;
    });
}

function Display(initialValue){
    const display = document.createElement("input");
    display.value = initialValue;
    display.readOnly = "readOnly";
    return display;
}
function Button(label){
    const button = document.createElement("button");
    button.innerText = label;
    return button;
}

//Calculator
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


const clicks = fromEvent(document, 'click')
.subscribe(click => console.log(click))

//End of Calculator

export default Counter;

