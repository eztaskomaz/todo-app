import React from "react";

class TodoForm extends React.Component {

    state = {
        input: this.props.edit ? this.props.edit.value : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: this.state.input
        });
    }

    handleChange = (e) => {
        this.setState({input: e.target.value});
    }

    render() {
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                {this.props.edit ? (
                    <>
                        <input
                            placeholder='Update your item'
                            value={this.input}
                            onChange={this.handleChange}
                            name='text'
                            className='todo-input edit'
                        />
                        <button onClick={this.handleSubmit} className='todo-button edit'>
                            Update
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            placeholder='Add a todo'
                            value={this.input}
                            onChange={this.handleChange}
                            name='text'
                            className='todo-input'
                            ref={this.inputRef}
                        />
                        <button onClick={this.handleSubmit} className='todo-button'>
                            Add todo
                        </button>
                    </>
                )}
            </form>
        )
    }
}

export default TodoForm;