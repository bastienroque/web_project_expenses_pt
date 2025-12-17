let budgetValue = 0;
let totalExpensesValue = 0;
const balanceColor = ["green" , "orange" , "red"];

const expenseEntries = [
    ["groceries" , 33],
    ["restaurants" , 50],
    ["transport" , 12],
    ["home" , 70],
    ["subscriptions" , 14],
    ["groceries" , 28],
    ["subscriptions", 12],
]

for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
    if (totalExpensesValue === 0) {
        return 0;
    } else {
        return totalExpensesValue / expenseEntries.length;
    } 
}

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
    if (calculateBalance() < 0) {
        return balanceColor[2];
    } else if (calculateBalance() < budgetValue / 4) {
        return balanceColor[1];
    } else {
        return balanceColor[0];
    }
}

function calculateCategoryExpenses(category) {
    let total = 0;
    
    for (let i = 0; i < expenseEntries.length; i++) {
        if (expenseEntries[i][0] === category) {
            total += expenseEntries[i][1];
        }
    }
    return total;
}

const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];

function calculateLargestCategory() {
    const categoriesTotals = [];

    for (let i = 0; i < categories.length; i++) {
        const categoryName = categories[i];
        const total = calculateCategoryExpenses(categoryName);
        categoriesTotals.push([categoryName, total]);
    }

    let largestCategory = categoriesTotals[0][0];
    let largestTotal = categoriesTotals[0][1];

    for (let i = 1; i < categoriesTotals.length; i++) {
        if (categoriesTotals[i][1] > largestTotal) {
            largestTotal = categoriesTotals[i][1];
            largestCategory = categoriesTotals[i][0];
        }
    }
    return largestCategory;
}

function addExpenseEntry(expenseEntry) {

    expenseEntries.push(expenseEntry);

    totalExpensesValue = totalExpensesValue + expenseEntry[1];
}