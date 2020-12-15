const account = {
    name: 'Riley Robertson',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount,
        })
    },

    getAccountSumamry: function () {
    let accountBalance = 0
    let totalExpenses = 0
    let totalIncome = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    },

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount,
        })
    }
}

account.addIncome('Work', 2000)
account.addIncome('Selling the couch', 150)
account.addIncome('Bonus', 500)

account.addExpense('coffee', 12)
account.addExpense('train tickets', 60)
account.addExpense('PS5', 600)
account.addExpense('Games', 140)

console.log(account.getAccountSumamry())

