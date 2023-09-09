import { useState } from 'react'; 
import ExpenceItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filtererdYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filtererdYear;
    })

    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filtererdYear} onchangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    )
}

export default Expenses;