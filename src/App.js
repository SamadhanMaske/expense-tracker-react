import ExpenseItem from "./Components/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300,
      date: new Date(2023, 9, 13),
      location: "Insurance Office",
    },
    {
      id: "e2",
      title: "Grocery",
      amount: 200,
      date: new Date(2023, 9, 12),
      location: "Star Quick",
    },
    {
      id: "e3",
      title: "Cloths",
      amount: 100,
      date: new Date(2023, 9, 11),
      location: "Samadhan Dresses",
    },
    {
      id: "e4",
      title: "Movie",
      amount: 50,
      date: new Date(2023, 9, 13),
      location: "PVR Sion",
    },
  ];

  return (
    <div>
      <div>
        <NewExpense/>
      </div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      ></ExpenseItem>
    </div>
  );
};

export default App;
