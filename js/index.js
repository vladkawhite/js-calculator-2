let buttons = document.querySelectorAll('.input');

let output = document.querySelector('.output');

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === 'C') {
        buttons[i].addEventListener('click', function() {
            output.innerHTML = '';
        })
    }
    else if (buttons[i].innerHTML === '=') {
        if (output.innerHTML != '') {
            buttons[i].addEventListener('click', calculate(i));
        }
        else {
            output.innerHTML = '';
        }
    }
    else {
        buttons[i].addEventListener('click', addInput(i));
    }
}

function addInput(i) {
    return function() {
        if (buttons[i].innerHTML === '÷' || buttons[i].innerHTML === '&divide') {
            output.innerHTML += '/';
        }
        else if (buttons[i].innerHTML === 'x') {
            output.innerHTML += '*';
        }
        else {
            output.innerHTML += buttons[i].innerHTML;
        }
    }
}

function calculate(i) {
    return function() {
        output.innerHTML = eval(output.innerHTML);
    }
}
