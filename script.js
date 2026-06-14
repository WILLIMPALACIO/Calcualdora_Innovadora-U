const result = document.getElementById('result');

function appendValue(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = 'Error';
    }
}

document.addEventListener('keydown', (e) => {

    const allowedKeys =
        '0123456789+-*/.%';

    if (allowedKeys.includes(e.key)) {
        result.value += e.key;
    }

    if (e.key === 'Enter') {
        calculate();
    }

    if (e.key === 'Backspace') {
        deleteLast();
    }

    if (e.key === 'Escape') {
        clearDisplay();
    }
});
