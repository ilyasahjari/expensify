import React from 'react';
import '../style/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from "../Components/Dashboard"
import ExpenseAdd from "../Components/ExpenseAdd"
import ExpenseDelete from "../Components/ExpenseDelete"
import ErrorMessage from "../Components/ErrorMessage"
import Header from "../Components/Header"
import ExpenseEdit from "../Components/ExpenseEdit"

function AppRouter() {
    const book = {
      title: 'la boite a merveille',
      author : 'ahmed sefrioui',
      publisher: {
        name : 'bac'
      }
    }
    const { name : publisherName } = book.publisher;
    console.log("the name is "+ publisherName);

    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/add" component={ExpenseAdd} />
            <Route path="/edit/:id" component={ExpenseEdit}/>
            <Route path ="/delete" component={ExpenseDelete}/>
            <Route component={ErrorMessage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default AppRouter;
  