import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter'

const Dashboard = () => (
    <div>
      <ExpenseListFilter/>
      <ExpenseList/>
    </div>
  );
  
export default Dashboard;  

