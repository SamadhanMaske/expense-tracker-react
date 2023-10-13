import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate = new Date(2023, 9, 13);
    const expenseTitle = "Car Insurance";
    const expensePrice = 300;
    const locationOfExpenditure = "Insurance Office";
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expensePrice}</div>
                <div>{locationOfExpenditure}</div>
            </div>
        </div>
    );
    
}

export default ExpenseItem;