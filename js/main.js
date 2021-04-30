
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
document.getElementById('btn').addEventListener('click', function () {
    main(selected);
})
function main(index) {
    let amal = document.querySelector('select').value;
    let misol = document.getElementById('misol');
    let javobInput = document.getElementById('javobInput');
    javobInput.innerHTML = `
    <input type="number" class="form-control" id="javob" placeholder="Javob"> 
    <button type="button" id="send" class="btn btn-dark btn-block ml-2">Send</button>
    `;
    javobInput.style.display = 'flex';
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
    function after3secondsBtnDisabled(){
        setTimeout(function(){
            document.getElementById('btn').setAttribute('disabled', 'true');
        }, 3000);
    }
    function sendOnClick(result1, result2, amal , ishora){
        if (ishora === '+') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2;
            document.getElementById('send').onclick = function () {
                (javob.value == result1 + result2) ? thisTrue() : thisFalse();
                setTimeout(function(){
                    document.getElementById('btn').removeAttribute('disabled');
                }, 2000);
            }
        }
        else if (ishora === '-') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2;
            document.getElementById('send').onclick = function () {
                (javob.value == result1 - result2) ? thisTrue() : thisFalse();
                setTimeout(function(){
                    document.getElementById('btn').removeAttribute('disabled');
                }, 2000);
            }
        }
        else if (ishora === '*') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2;
            document.getElementById('send').onclick = function () {
                (javob.value == result1 * result2) ? thisTrue() : thisFalse();
                setTimeout(function(){
                    document.getElementById('btn').removeAttribute('disabled');
                }, 2000);
            }
        }
        else if (ishora === '/') {
            misol.innerHTML = '' + result1 + ' ' + amal + ' ' + result2;
            document.getElementById('send').onclick = function () {
                (javob.value == result1 / result2) ? thisTrue() : thisFalse();
                setTimeout(function(){
                    document.getElementById('btn').removeAttribute('disabled');
                }, 2000);
            }
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
            sendOnClick(result1, result2, amal, '/');
        }
    }
    else if (selected == 1) {
        console.log(Math.floor(Math.random() * 21));
        let result1 = Math.floor(Math.random() * 21);
        let result2 = Math.floor(Math.random() * 21);
        if (amal == '+') {
            sendOnClick(result1, result2, amal, '+');
        } else if (amal == '-') {
            sendOnClick(result1, result2, amal, '-');
        } else if (amal == '*') {
            sendOnClick(result1, result2, amal, '*');
        } else if (amal == '/') {
            sendOnClick(result1, result2, amal, '/');
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
            sendOnClick(result1, result2, amal, '/');
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
            sendOnClick(result1, result2, amal, '/');
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
            sendOnClick(result1, result2, amal, '/');
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
            sendOnClick(result1, result2, amal, '/');
        }
    }
    after3secondsBtnDisabled()
}

