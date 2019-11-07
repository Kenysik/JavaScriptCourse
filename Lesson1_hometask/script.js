let budget, date;

function start(){
    budget = +prompt("Enter your month budget");
    date = prompt("Enter date in the format YYYY-MM-DD");

    while(isNaN(budget) ||budget=="" || budget==null){
        budget = +prompt("Enter your month budget");
    }
}

start();

let appData = {
    budget: budget,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: date,
    savings: true
}

/*a1 = prompt("Enter required expences this months");
a11 = prompt("What summ of money is needed?");
a2 = prompt("Enter required expences this months");
a21 = prompt("What summ of money is needed?");

appData.expenses.a1 = a11;
appData.expenses.a2 = a21;*/

function chooseExpences(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Enter required expences this months"),
            b = +prompt("What summ of money is needed?");
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
            && a != "" && b != "" && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
        }
}

/*    else {
        i--;
        continue;
    }*/

}
chooseExpences();
detectDayBudget();
detectLevel();
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Money per day:" + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100){
        console.log("Minimum level of income");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
        console.log("Middle level of income");
    } else if (appData.moneyPerDay >= 1000) {
        console.log("High level of income");
    } else console.log("Some error occured");
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = +prompt("What summ of money is needed for optional expences?");
        if (typeof (a) != null && a != "") {
            console.log("done");
            appData.optionalExpenses[i] = a;
        }
    }
    console.log(appData.optionalExpenses)
}

function checkSavings() {
    if (appData.savings == true){
        let save = +prompt("What summ of savings do you have?"),
            percent = +prompt("What percent?");
        appData.monthIncome = save/100/12*percent;
        alert("Your monthly income is: " + appData.monthIncome);
    }
}

checkSavings();

