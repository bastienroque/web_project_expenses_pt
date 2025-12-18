const expenseEntries = [
    ["groceries" , 33],
    ["restaurants" , 50],
    ["transport" , 12],
    ["home" , 70],
    ["subscriptions" , 14],
    ["groceries" , 28],
    ["subscriptions", 12],
]

let totalExpensesValue = expenseEntries.reduce((total, entry) => {
    return total + entry[1];
}, 0);

function calculateAverageExpense() {
    if (totalExpensesValue === 0) {
        return 0;
    } else {
        return totalExpensesValue / expenseEntries.length;
    } 
}

let budgetValue = 0;

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
    const balance = calculateBalance();
    if (balance < 0) {
        balanceColor = "red";
    } else if (balance < budgetValue / 4) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
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
    const category = expenseEntry[0];
    const value = expenseEntry[1];

    if (typeof value !== "number" || value <= 0) {
        return;
    }

    expenseEntries.push(expenseEntry);
    totalExpensesValue += value;
}