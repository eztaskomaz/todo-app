import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {

    state = {
        todos: []
    }

    addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...this.state.todos];
        this.setState({todos: newTodos});
    }

    updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        const updatedTodos = [...this.state.todos];
        updatedTodos.map(item => (item.id === todoId ? newValue : item));
        this.setState({todos: updatedTodos});
    }

    removeTodo = id => {
        const removedArr = [...this.state.todos].filter(todo => todo.id !== id);
        this.setState({todos: removedArr});
    };

    completeTodo = id => {
        let updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    };

    render() {
        return (
            <div>
                <h1>What's the Plan for Today?</h1>
                <TodoForm onSubmit={this.addTodo}/>
                <Todo
                    todos={this.state.todos}
                    completeTodo={this.completeTodo}
                    removeTodo={this.removeTodo}
                    updateTodo={this.updateTodo}/>
            </div>
        )
    }

}

export default TodoList;