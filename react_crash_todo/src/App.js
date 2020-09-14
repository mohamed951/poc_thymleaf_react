import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import TodoList from './components/TodoList';
import About from './components/About';
import AddTodo from './components/AddTodo';
import model from './model';
import InnerHTML from 'dangerously-set-html-content'
const store = createStore(model);


class App extends Component {
state={
  html:""
}
  componentDidMount(){
    fetch("http://localhost:8080")
    .then(res=>res.text())
    .then(data=>{this.setState({html:data})});
  }

  render() {
    return (
      <StoreProvider store={store}>
        <Router>
          <div className="App">
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <React.Fragment>
                  <InnerHTML html={this.state.html} />
                {/* <div dangerouslySetInnerHTML={{ __html: this.state.html }} /> */}
                  {/* <AddTodo addTodo={this.addTodo}></AddTodo>
                  <TodoList></TodoList> */}
                </React.Fragment>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
      </StoreProvider>
    );
  }
}

export default App;
