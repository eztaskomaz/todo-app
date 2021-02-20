import './App.css';
import React from 'react';
import TodoList from './component/TodoList';

class App extends React.Component {
  render() {
      return (
          <div className='App'>
              <h1>Todo App</h1>
              <TodoList></TodoList>
          </div>
      );
  }
}

export default App;
