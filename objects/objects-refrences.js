let myAccount = {
    name: 'Riley Robertson',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let accountSummary = function (account) {
    let accountBalance = account.income - account.expenses
    return `The account of ${myAccount.name} has a balance of $${accountBalance}, with and income of $${account.income} and $${account.expenses} of expenses.`
}

addIncome(myAccount, 10000)
addExpense(myAccount, 27.32)
addExpense(myAccount, 5632)


console.log(accountSummary(myAccount))

resetAccount(myAccount)

console.log(accountSummary(myAccount))