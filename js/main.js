
let checked_switch = `
<label for="customRange">Custom range</label>
<input type="range" class="custom-range" id="customRange" name="points1">
`;

let selected = 0;
document.querySelectorAll('.maxrandom').forEach((value, index) => {
        value.onclick = function() {
            if (index == 0){
                selected = index;
            }
            else{
                selected = index;
            }
        }
})

let ifChecked = document.getElementById('ifChecked');
let checkbox = document.getElementById('selectrandom');
checkbox.onclick = function() {
    if(checkbox.checked) {
        document.querySelectorAll('.maxrandom').forEach((value, index) => {
            value.style.display = 'none';
            value.checked = false;
        })
        document.querySelectorAll('.span').forEach((value,index) => {
            value.style.display = 'none';
        })
        ifChecked.style.display = 'block';
        selected = 5;
    }
    else{
        document.querySelectorAll('.maxrandom').forEach((value, index) => {
            value.style.display = 'inline-block';
            value.checked = false;
        })
        document.querySelectorAll('.span').forEach((value,index) => {
            value.style.display = 'inline-block';
        })
        ifChecked.style.display = 'none';
    }
}
document.getElementById('btn').addEventListener('click', function(){
    main(selected);
})
function main(index) {
    let amal = document.querySelector('select').value; 
    let misol = document.getElementById('misol');
    let javobInput = document.getElementById('javobInput');
    javobInput.innerHTML = `<input type="number" class="form-control" id="javob"> 
    <button type="button" id="send" class="btn btn-dark btn-block ml-2">Send</button>
    `;
    javobInput.style.display = 'flex';
    let javob = document.getElementById('javob');
    let massage = document.getElementById('massage');
    let success = document.getElementById('p1');
    let danger = document.getElementById('p2');
    success.style.display = 'none';
    danger.style.display = 'none';
    let level = document.getElementById('level');
    let levelNum = level.innerHTML;
    levelNum *= 1;

    
    function thisTrue(){
        success.style.display='block';
        levelNum += 1;
        level.innerHTML = levelNum;
    }
   
    if (selected == 0){
        let result1 = Math.floor(Math.random() * 11);
        let result2 = Math.floor(Math.random() * 11);
        if (amal == '+') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1+result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '-') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1-result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '*') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1*result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '/') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1/result2) ? thisTrue() : danger.style.display='block';
            }
        }
    }
    else if (selected == 1){
        console.log(Math.floor(Math.random() * 21));
        let result1 = Math.floor(Math.random() * 21);
        let result2 = Math.floor(Math.random() * 21);
        if (amal == '+') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1+result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '-') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1-result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '*') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1*result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '/') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1/result2) ? thisTrue() : danger.style.display='block';
            }
        }
    }
    else if (selected == 2){
        let result1 = Math.floor(Math.random() * 31);
        let result2 = Math.floor(Math.random() * 31);
        if (amal == '+') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1+result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '-') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1-result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '*') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1*result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '/') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1/result2) ? thisTrue() : danger.style.display='block';
            }
        }
    }
    else if (selected == 3){
        let result1 = Math.floor(Math.random() * 41);
        let result2 = Math.floor(Math.random() * 41);
        if (amal == '+') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1+result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '-') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1-result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '*') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1*result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '/') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1/result2) ? thisTrue() : danger.style.display='block';
            }
        }
    }
    else if (selected == 4){
        let result1 = Math.floor(Math.random() * 51);
        let result2 = Math.floor(Math.random() * 51);
        if (amal == '+') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1+result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '-') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1-result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '*') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1*result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '/') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1/result2) ? thisTrue() : danger.style.display='block';
            }
        }
    }
    else {
        ifChecked.value *= 1;
        let result1 = Math.floor(Math.random() * Number(ifChecked.value));
        let result2 = Math.floor(Math.random() * Number(ifChecked.value));
        if (amal == '+') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1+result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '-') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1-result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '*') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1*result2) ? thisTrue() : danger.style.display='block';
            }
        } else if (amal == '/') {
            misol.innerHTML = '' + result1 + ' '+ amal + ' ' + result2;
            document.getElementById('send').onclick = function(){
                (javob.value == result1/result2) ? thisTrue() : danger.style.display='block';
            }
        }
    }

}

