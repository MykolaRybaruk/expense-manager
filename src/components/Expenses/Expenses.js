import { useState } from 'react'; 
//import ExpenceItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

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
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    )
}

export default Expenses;