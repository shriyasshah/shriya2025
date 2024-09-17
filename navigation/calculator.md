---
layout: page
title: Calculator
permalink: /calculator/
---

<div class="input-container">
    <input type="number" id="num1" placeholder="Enter first number">
    <select id="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
        <option value="power">Power</option>
        <option value="modulo">Modulo</option>
    </select>
    <input type="number" id="num2" placeholder="Enter second number">
</div>
<br>
<button onclick="calculate()">Calculate!</button>
<p>Result: <span id="result"></span></p>
<script>
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'modulo':
            result = num1 % num2;
            break;
        default:
            result = 'Invalid operation';
    }
    document.getElementById('result').innerText = result;
}
</script>

<style>
input, select {
    padding: 5px;
    border-radius:10px;
    border:none;
    background-color: #99EDC3;
}

::placeholder {
    color: black;
}
</style>

