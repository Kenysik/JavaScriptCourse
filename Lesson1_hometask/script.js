let budget = +prompt("Enter your month budget");
let date = prompt("Enter date in the format YYYY-MM-DD");

let appData = {
    budget: budget,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: date,
    savings: false
}

/*a1 = prompt("Enter required expences this months");
a11 = prompt("What summ of money is needed?");
a2 = prompt("Enter required expences this months");
a21 = prompt("What summ of money is needed?");

appData.expenses.a1 = a11;
appData.expenses.a2 = a21;*/

for (let i = 0; i < 2; i++){
    let a = prompt("Enter required expences this months"),
        b = +prompt("What summ of money is needed?");
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                    && a != "" && b != "" && a.length < 50) {
        console.log ("done");
        appData.expenses[a] = b;
    }
/*    else {
        i--;
        continue;
    }*/

}

appData.moneyPerDay = appData.budget / 30;
alert("Money per day:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Minimum level of income");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
    console.log("Middle level of income");
} else if (appData.moneyPerDay >= 1000) {
    console.log("High level of income");
} else console.log("Some error occured");
