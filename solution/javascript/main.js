let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


function printTime(minutes, seconds, milliseconds) {
    // console.log(minutes, seconds);
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliseconds(milliseconds);

}

function printMinutes(minutes) {
    minDec.innerHTML = minutes.charAt(0);
    minUni.innerHTML = minutes.charAt(1);
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds.charAt(0);
    secUni.innerHTML = seconds.charAt(1);
}

function printMilliseconds(milliseconds) {
    milDec.innerHTML = milliseconds.charAt(0);
    milUni.innerHTML = milliseconds.charAt(1);
}
function printSplit() {
    let li = document.createElement('li');
    li.textContent = chronometer.splitClick();
    splits.appendChild(li);
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {
    printSplit();
}

function setStartBtn(e) {
    chronometer.startClick(printTime);

}

function setResetBtn() {
    chronometer.resetClick();
    printTime('00', '00', '00');
    clearSplits();

}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {

    if (e.target.classList.contains('start')) {
        setStartBtn(e);
        btnLeft.classList.replace('start', 'stop');
        btnRight.classList.replace('reset', 'split');
        btnLeft.textContent = 'STOP';
        btnRight.textContent = 'SPLIT';
    } else {
        setStopBtn();
        btnLeft.classList.replace('stop', 'start');
        btnRight.classList.replace('split', 'reset');
        btnLeft.textContent = 'START';
        btnRight.textContent = 'RESET';
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function (e) {
    if (e.target.classList.contains('reset')) {
        setResetBtn();
    } else {
        setSplitBtn();
    }
});
