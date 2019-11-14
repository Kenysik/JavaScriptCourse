let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


let money, time;

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

startBtn.addEventListener('click', function () {
    money = +prompt("Enter your month money");
    time = prompt("Enter time in the format YYYY-MM-DD");

    while(isNaN(money) ||money=="" || money==null){
        money = +prompt("Enter your month money");
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
            && a != "" && b != "" && a.length < 50) {
            console.log("Data is correct");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let a = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if(appData.budget != undefined) {

        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Minimum level of income";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
            levelValue.textContent = "Middle level of income";
        } else if (appData.moneyPerDay >= 1000) {
            levelValue.textContent = "High level of income";
        } else levelValue.textContent = "Some error occured";
    } else {
        dayBudgetValue.textContent = "Some error occured";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/ 100 / 12 * percent;
        appData.yearIncome = sum/ 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener('input', function () {
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/ 100 / 12 * percent;
        appData.yearIncome = sum/ 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});





