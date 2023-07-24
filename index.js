let a = '';
let b = '';
let sign = '';
let finish = false;

const button = document.getElementById('click');
const calculator = document.querySelector('.calculator')
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('.result');
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%', '+/-'];
const out = document.querySelector('.calculator__screen p');

function changeColor() {
    button.classList.toggle('farmgame__btn_one')
    calculator.classList.toggle('calculator_one')
    btn.forEach((i)=> i.classList.toggle('btn_one'))
}

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b==='' && sign ==='') {
            a+=key;
            console.log(a, b, sign);
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "%":
                a = a / 100;
                break;
            case "+/-":
                a = -a
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

}

function run () {
    button.addEventListener('click', changeColor)
    // result.textContent = 0
}

run()