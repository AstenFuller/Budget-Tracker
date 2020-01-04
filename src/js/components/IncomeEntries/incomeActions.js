export function updateIncomeDescription(description) {
    return {
        type: 'UPDATE_INCOME_DESCRIPTION',
        payload: { description }
    };
}

export function updateIncomeAmount(amount) {
    return {
        type: 'UPDATE_INCOME_AMOUNT',
        payload: { amount }
    };
}

export function addIncome(description, amount) {
    if(amount != 0 && amount != undefined && amount != NaN){
    return {
        type: 'ADD_INCOME',
        payload: {
            description,
            amount: parseFloat(amount)
        }
    }
    };
}