import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from "./TodoForm";

class Todo extends React.Component {

    state= {
        edit: {id:null, value:''}
    }

    submitUpdate = value => {
        this.props.updateTodo(this.state.edit.id, value);
        this.setState({        edit: {id:null, value:''}});
    };

    render() {
        if (this.state.edit.id) {
            return <TodoForm edit={this.state.edit} onSubmit={this.submitUpdate} />;
        }
        return this.props.todos.map((todo, index) => (
            <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
                <div key={todo.id} onClick={() => this.props.completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine
                        onClick={() => this.props.removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => this.setState({edit: { id: todo.id, value: todo.text }})}
                        className='edit-icon'
                    />
                </div>
            </div>
        ));
    };
}

export default Todo;