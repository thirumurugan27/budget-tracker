
let balance = 0;
let salary = 0;
let expenses = 0;

function addIncome() {
    const incomeInput = document.getElementById('income');
    const incomeValue = parseFloat(incomeInput.value);

    if (!isNaN(incomeValue) && incomeValue > 0) {
        salary += incomeValue;
        balance += incomeValue;
        updateDisplay();
        addIncomeToTable(incomeValue);
        incomeInput.value = '';
    } else {
        alert('Please enter a valid income amount');
    }
}

function addExpense() {
    const expenseInput = document.getElementById('expense');
    const expenseDescInput = document.getElementById('expenseDesc');
    const expenseValue = parseFloat(expenseInput.value);
    const expenseDesc = expenseDescInput.value.trim();

    if (!isNaN(expenseValue) && expenseValue > 0 && expenseDesc !== "") {
        expenses += expenseValue;
        balance -= expenseValue;
        updateDisplay();
        addExpenseToTable(expenseValue, expenseDesc);
        expenseInput.value = '';
        expenseDescInput.value = '';
    } else {
        alert('Please enter a valid expense amount and description');
    }
}

function addIncomeToTable(value) {
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    const newRow = expenseTable.insertRow();

    const descCell = newRow.insertCell(0);
    const valueCell = newRow.insertCell(1);

    descCell.textContent = 'Income';
    valueCell.textContent = `$${value.toFixed(2)}`;
    newRow.classList.add('income-row');
}

function addExpenseToTable(value, description) {
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    const newRow = expenseTable.insertRow();

    const descCell = newRow.insertCell(0);
    const valueCell = newRow.insertCell(1);

    descCell.textContent = description;
    valueCell.textContent = `$${value.toFixed(2)}`;
    newRow.classList.add('expense-row');
}

function updateDisplay() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `$${balance.toFixed(2)}`;

    // Change the color of the balance based on its value
    if (balance > 0) {
        balanceElement.style.color = 'green';
    } 
    else 
    {
        balanceElement.style.color = 'red';
    }
    document.getElementById('n').textContent = `$${salary.toFixed(2)}`;
    document.getElementById('m').textContent = `$${expenses.toFixed(2)}`;
}
function updateDisplay() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `$${balance.toFixed(2)}`;

    // Change the color of the balance based on its value
    if (balance > 0) {
        balanceElement.style.color = 'green';
    } else {
        balanceElement.style.color = 'red';
    }

    document.getElementById('n').textContent = `$${salary.toFixed(2)}`;
    document.getElementById('m').textContent = `$${expenses.toFixed(2)}`;
}