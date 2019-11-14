let budget, date;

function start(){
    budget = +prompt("Enter your month money");
    date = prompt("Enter time in the format YYYY-MM-DD");

    while(isNaN(budget) ||budget=="" || budget==null){
        budget = +prompt("Enter your month money");
    }
}

start();

let appData = {
    budget: budget,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: date,
    savings: true,
    chooseExpences: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Enter required expences this months"),
                b = +prompt("What summ of money is needed?");
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != "" && b != "" && a.length < 50) {
                console.log("Data is correct");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Money per day:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Minimum level of income");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
            console.log("Middle level of income");
        } else if (appData.moneyPerDay >= 1000) {
            console.log("High level of income");
        } else console.log("Some error occured");
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("What summ of savings do you have?"),
                percent = +prompt("What percent?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Your monthly income is: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = +prompt("What summ of money is needed for optional expences?");
            if (typeof (a) != null && a != "") {
                console.log("done");
                appData.optionalExpenses[i] = a;
            }
        }
        console.log(appData.optionalExpenses)
    },
    chooseIncome: function () {
        let items = prompt("What does give you additional income? (use ',' )", "");
        appData.income = items.split(', ');
        appData.income.push(prompt("Something else?"));
        appData.income.sort();
    }
};


/*a1 = prompt("Enter required expences this months");
a11 = prompt("What summ of money is needed?");
a2 = prompt("Enter required expences this months");
a21 = prompt("What summ of money is needed?");

appData.expenses.a1 = a11;
appData.expenses.a2 = a21;*/

/*    else {
        i--;
        continue;
    }*/

/*

chooseExpences();
detectDayBudget();
detectLevel();
chooseOptExpenses();
checkSavings();
*/

