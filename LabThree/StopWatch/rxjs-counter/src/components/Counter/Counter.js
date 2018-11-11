import { fromEvent, interval, merge, pipe, subscribe } from "rxjs";
import "./style.css";


const canvas = document.getElementById('canvas');
    const timer = document.getElementById('timer');
    const splitsList = document.getElementById('splitList');

    const src = interval(100);
    
    let isOn = false;
    let time = 0;
    let splitCount = 0;

    const subscription = src.subscribe(
    x => {
        if(!isOn) return;
        time++;
        draw(time);
        timer.innerHTML = Math.floor(time / 600) + ":" + Math.floor((time / 10) % 60) + ":" + (time % 10) + "0";
    });

    const start = fromEvent(document.getElementById('start'), 'click')
    .subscribe(e => {
        isOn = true;
    });

    const stop = fromEvent(document.getElementById('stop'), 'click')
    .subscribe(e => {
        isOn = false;
    });

    if(splitCount <= 5){
        const split = fromEvent(document.getElementById('split'), 'click')
        .subscribe(e => {
            splitsList.innerHTML += timer.innerHTML + "<br/>";
        });
        splitCount = splitCount + 1;
    } else {
        const split = fromEvent(document.getElementById('split'), 'click')
        .subscribe(e => {
            splitsList.innerHTML += "<br/>";
        });
    }
    

    const reset = fromEvent(document.getElementById('reset'), 'click')
    .subscribe(e => {
        isOn = false;
        time = 0;
        draw(time);
        timer.innerHTML = "0:0:00";
        splitsList.innerHTML = "";
        splitCount = 0;
    });

    const draw = (time) => {
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const watchSize = 94;
        const contentSize = 0.92;
        //Center part
        ctx.fillStyle = "Dim-Gray";
        ctx.beginPath();
        ctx.arc(watchSize, watchSize, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.strokeStyle = "Black";
        ctx.beginPath();

        //Outside circle
        ctx.arc(watchSize, watchSize, watchSize, 0, Math.PI * 2, true);
        ctx.arc(watchSize, watchSize, watchSize - 2, 0, Math.PI * 2, true);

        // The 12 lines
        for (let i = 0; i < 12; i++) {
        let angle = i * (Math.PI * 2 / 12);
        const armLength = watchSize * 0.15;
        ctx.moveTo(watchSize + watchSize * Math.cos(angle) * contentSize, watchSize + watchSize * Math.sin(angle) * contentSize);
        ctx.lineTo(watchSize + (watchSize - armLength) * Math.cos(angle) * contentSize, watchSize + (watchSize - armLength) * Math.sin(angle) * contentSize);
        }

        //All the short lines
        for (let i = 0; i < 60; i++) {
        let angle = i * (Math.PI * 2 / 60);
        const armLength = watchSize * 0.05;
        ctx.moveTo(watchSize + watchSize * Math.cos(angle) * contentSize, watchSize + watchSize * Math.sin(angle) * contentSize);
        ctx.lineTo(watchSize + (watchSize - armLength) * Math.cos(angle) * contentSize, watchSize + (watchSize - armLength) * Math.sin(angle) * contentSize);
        }

        //Hand for the minutes
        let angle = (time / 600 / 60 - 0.25) * (Math.PI * 2);
        let armLength = watchSize * 0.5;
        ctx.moveTo(watchSize, watchSize);
        ctx.lineTo(watchSize + armLength * Math.cos(angle), watchSize + armLength * Math.sin(angle));

        //Hand for the seconds
        angle = (time / 10 / 60 - 0.25) * (Math.PI * 2);
        armLength = watchSize * 0.8;
        ctx.moveTo(watchSize, watchSize);
        ctx.lineTo(watchSize + armLength * Math.cos(angle), watchSize + armLength * Math.sin(angle));

        ctx.stroke();
    }
    }

    draw();


export default Counter;
