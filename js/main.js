
let checked_switch = `
<label for="customRange">Custom range</label>
<input type="range" class="custom-range" id="customRange" name="points1">
`;
let span = document.querySelectorAll('.span')
let selected = 0;
document.querySelectorAll('.maxrandom').forEach((value, index) => {
    value.onclick = function () {
        if (index == 0) {
            selected = index;
            span.forEach((value,index) => {
                value.style.color = 'black';
            });
            span[index].style.color = 'red';
        }
        else {
            selected = index;
            span.forEach((value,index) => {
                value.style.color = 'black';
            });
            span[index].style.color = 'red';
        }
    }
})

let ifChecked = document.getElementById('ifChecked');
let checkbox = document.getElementById('selectrandom');
checkbox.onclick = function () {
    if (checkbox.checked) {
        document.querySelectorAll('.maxrandom').forEach((value, index) => {
            value.style.display = 'none';
            value.checked = false;
        })
        document.querySelectorAll('.span').forEach((value, index) => {
            value.style.display = 'none';
        })
        ifChecked.style.display = 'block';
        selected = 5;
    }
    else {
        document.querySelectorAll('.maxrandom').forEach((value, index) => {
            value.style.display = 'inline-block';
            value.checked = false;
        })
        document.querySelectorAll('.span').forEach((value, index) => {
            value.style.display = 'inline-block';
        })
        ifChecked.style.display = 'none';
    }
}
let myTimeout;
let startDisabled;
document.getElementById('btn').onclick = function () {
    clearTimeout(myTimeout);
    main(selected);
    this.style.width = '48%';
}
function main(index) {
    let amal = document.querySelector('select').value;
    let misol = document.getElementById('misol');
    let javobI = document.getElementById('javobI');
    javobI.innerHTML = '<input type="number" class="form-control" id="javob" placeholder="Javob"> ';
    let javobInput = document.getElementById('javobInput');
    javobInput.innerHTML = `
    <button type="button" id="send" class="btn btn-dark btn-block ml-1">Send</button>
    `;
    javobInput.style.width = '48%';
    let javob = document.getElementById('javob');
    let massage = document.getElementById('massage');
    let success = document.getElementById('p1');
    let danger = document.getElementById('p2');
    let send = document.getElementById('send');

    let level = document.getElementById('level');
    let levelNum = level.innerHTML;
    levelNum *= 1;

    let error = document.getElementById('error');
    let errorNum = error.innerHTML;
    errorNum *= 1;

    success.style.display = 'none';
    danger.style.display = 'none';

    function thisTrue() {
        success.style.display = 'none';
        danger.style.display = 'none';
        success.style.display = 'block';
        levelNum += 1;
        level.innerHTML = levelNum;
        send.setAttribute('disabled', 'true');
        document.getElementById('btn').removeAttribute('disabled');
        clearTimeout(startDisabled);
        myTimeout = setTimeout(function (){
            document.getElementById('btn').click();
        }, 3000);
    }
    function thisFalse() {
        if ((errorNum - 9) == levelNum) {
            let form = document.getElementById('form').children;
            for (let i = 0; form.length > i; i++) {
                form[i].style.display = 'none';
            }
            document.getElementById('game-over').style.display = 'block';
            document.getElementById('game-over').style.height = '100%';
            document.getElementById('game-over').style.opacity = 1;
            document.getElementById('game-over').style.transform = 'translateY(0px)';
            document.getElementById('game-over').onclick = function () {
                window.location.reload();
            }
        } else {
            success.style.display = 'none';
            danger.style.display = 'none';
            danger.style.display = 'block';
            errorNum += 1;
            error.innerHTML = errorNum;
            document.getElementById('btn').setAttribute('disabled', 'true');
        }
    }
    
    function sendOnClick(result1, result2, amal , ishora){
        if (ishora === '+') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2 + ' = ';
            document.getElementById('send').onclick = function () {
                (javob.value == result1 + result2) ? thisTrue() : thisFalse();
            }
        }
        else if (ishora === '-') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2 + ' = ';
            document.getElementById('send').onclick = function () {
                (javob.value == result1 - result2) ? thisTrue() : thisFalse();
            }
        }
        else if (ishora === '*') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2 + ' = ';
            document.getElementById('send').onclick = function () {
                (javob.value == result1 * result2) ? thisTrue() : thisFalse();
            }
        }
        else if (ishora === '/') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2 + ' = ';
            document.getElementById('send').onclick = function () {
                (javob.value == result1 / result2) ? thisTrue() : thisFalse();
            }
        }
        
    }
    function checkForDividedNumbers(result1, result2) {
        if (result1 < result2 || result2 === 0 || String(result1 / result2).includes('.')) {
            console.log(`False Numbers ${result1} / ${result2}`);
            main();
        } else {
            sendOnClick(result1, result2, amal, '/');
        }
    }
    if (selected == 0) {
        let result1 = Math.floor(Math.random() * 11);
        let result2 = Math.floor(Math.random() * 11);
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            checkForDividedNumbers(result1, result2);
        }
    }
    else if (selected == 1) {
        let result1 = Math.floor(Math.random() * 21);
        let result2 = Math.floor(Math.random() * 21);
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            checkForDividedNumbers(result1, result2);
        }
    }
    else if (selected == 2) {
        let result1 = Math.floor(Math.random() * 31);
        let result2 = Math.floor(Math.random() * 31);
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            checkForDividedNumbers(result1, result2);
        }
    }
    else if (selected == 3) {
        let result1 = Math.floor(Math.random() * 41);
        let result2 = Math.floor(Math.random() * 41);
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            checkForDividedNumbers(result1, result2);
        }
    }
    else if (selected == 4) {
        let result1 = Math.floor(Math.random() * 51);
        let result2 = Math.floor(Math.random() * 51);
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            checkForDividedNumbers(result1, result2);
        }
    }
    else {
        ifChecked.value *= 1;
        let result1 = Math.floor(Math.random() * Number(ifChecked.value));
        let result2 = Math.floor(Math.random() * Number(ifChecked.value));
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            checkForDividedNumbers(result1, result2);
        }
    }
    
    startDisabled = setTimeout(function after3secondsBtnDisabled(){
        document.getElementById('btn').setAttribute('disabled', 'true');
    }, 1500);

    let formm = document.querySelector('form'); 
    if (formm.style.color === 'rgb(255, 255, 255)') {
        javob.style.background = '#222';
        javob.style.color = '#fff';
    }
}

// dark and light mode
let light = document.getElementById('light');
let dark = document.getElementById('dark');
let info = document.getElementById('info');

light.onclick = () => {
    let javob = document.getElementById('javob');
    document.body.style.transition = '0.3s'
    document.body.style.background = '#fff';
    // document.body.style.color = '#000';
    document.getElementById('form').style.background = '#222';
    document.getElementById('form').style.color = '#fff';
    if (javob !== null){
        javob.style.background = '#222';
        javob.style.color = '#fff';
    }
    info.style.background = 'rgb(156, 156, 156)';
    
    dark.style.opacity = 1;
    light.style.opacity = 0;
    setTimeout(function(){
        light.style.zIndex = 2;
        dark.style.zIndex = 3;
    }, 550);
}
dark.onclick = () => {
    let javob = document.getElementById('javob');
    document.body.style.transition = '0.3s'
    document.body.style.background = '#222222';
    // document.body.style.color = '#fff';
    document.getElementById('form').style.background = '#fff';
    document.getElementById('form').style.color = '#000';
    if (javob !== null){
        javob.style.background = '#fff';
        javob.style.color = '#222';
    }
    info.style.background = 'rgba(34, 34, 34, 0.534)';
    

    dark.style.opacity = 0;
    light.style.opacity = 1;
    setTimeout(function(){
        light.style.zIndex = 3;
        dark.style.zIndex = 2;
    }, 550);
}
// info img

let alertt = document.getElementById('alert');
let closee = document.getElementById('close');
let formm = document.querySelector('form'); 
info.onclick = function () {
    // go up
    if (alertt.style.transform == 'translateY(0px)') {
        alertt.style.transform = 'translateY(-400px)';

        if (formm.style.background === 'rgb(34, 34, 34)') 
            info.style.background = 'rgb(156, 156, 156)';
        else info.style.background = 'rgba(34, 34, 34, 0.534)';

        formm.style.height = '100%';
    } else { // go down
        alertt.style.transform = 'translateY(0px)';
        
        if (formm.style.background === 'rgb(34, 34, 34)') 
            info.style.background = 'rgba(255,255,255)';
        else info.style.background = '#000';

        if (window.innerWidth <= 355) 
            formm.style.height = '400px';
        else if (window.innerWidth <= 417) 
            formm.style.height = '335px';
        
    }
}
closee.onclick = function () {
    alertt.style.transform = 'translateY(-400px)';
    if (formm.style.background === 'rgb(34, 34, 34)')
        info.style.background = 'rgb(156, 156, 156)';
    else info.style.background = 'rgba(34, 34, 34, 0.534)';
    formm.style.height = '100%';
}

info.onmouseover = function() {
    if (formm.style.background === 'rgb(34, 34, 34)'){ // dark
        info.classList.remove('hoverForLight');
        info.classList.add('hoverForDark');
    }
        
    else {// light
        info.classList.remove('hoverForDark');
        info.classList.add('hoverForLight');
    } 
}
info.onmouseout = function() {
    if (formm.style.background === 'rgb(34, 34, 34)') {// dark
        info.classList.remove('hoverForDark');
        info.classList.remove('hoverForLight');
    }
        
    else {// light
        info.classList.remove('hoverForDark');
        info.classList.remove('hoverForLight');
    } 
}

maxoutput.value = 10;
function rand() {
    let rando = Math.floor(Math.random() * (Number(maxoutput.value)+1));
    return rando;
}
maxoutputBtn.onclick = function maxoutputF () {
    if (maxoutput.value !== '' || Number(maxoutput.value) > 0) {
        let r = rand();
        if (maxoutputDisplay.innerHTML == r || r == undefined || r == 0) maxoutputF();
        else {
            maxoutputDisplay.innerHTML = r;
            console.log(r);
        }
    } 
    else {
        maxoutputDisplay.innerHTML = 'Please, Enter number and try again';
    }
}

openRandom.onclick = function() {
    if (alertRandom.style.transform == 'translateY(0px)') 
        alertRandom.style.transform = 'translateY(-400px)';

    else alertRandom.style.transform = 'translateY(0px)';
}
close2.onclick = () => {
    alertRandom.style.transform = 'translateY(-400px)';
}