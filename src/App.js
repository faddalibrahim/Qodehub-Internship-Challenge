import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Route } from 'react-router-dom';
import Edit from './Edit';
// import axios from 'axios'

class App extends Component {
  // componentDidMount(){
  //   fetch('api.php')
  //   .then(res => console.log(res.body))
  //   .then(ress => console.log(ress))
  //   .catch(err => console.log(err))
  // }


	state = {
		todos: [
			{content: 'Workout', id: 1},
			{content: 'Bath', id: 2},
			{content: 'Eat', id: 3}
		]
	}

	addTodo = (newTodo) => {
    newTodo.id = this.state.todos.length + 1;
		let newList = [...this.state.todos, newTodo];
		this.setState({
			todos: newList
		})
	}

	deleteTodo = (id) => {
		let newList = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos: newList
		})
  }
  
  editTodo = (id, newContent) => {
    let old = this.state.todos.find(todo => todo.id === id);
    let newTodos = [...this.state.todos];
    old.content = newContent;
    newTodos.splice(old.id - 1,1,old);

    this.setState({
      todos: newTodos
    })
  }

	render(){
		return(
        <Router>
          <>
            {/* <Todos deleteTodo={this.deleteTodo} editTodo={this.editTodo} todos={this.state.todos}/> */}
            {/* <AddTodo addTodo={this.addTodo}/> */}
            <Route path="/" render={(props) =>  <AddTodo {...props} addTodo={this.addTodo}/>}></Route>
            <Route path="/" render={(props) => <Todos {...props} deleteTodo={this.deleteTodo} todos={this.state.todos}/>}></Route>
           
            {/* <Route path="/edit" component={Edit} editTodo={this.editTodo}></Route> */}
            <Route 
              path="/:todo_id" 
              render={(props) => <Edit {...props}  editTodo={this.editTodo}/>}
              // component={Edit} editTodo={this.editTodo}
              ></Route>
          </>
        </Router>
			
		)
	}
}


export default App;