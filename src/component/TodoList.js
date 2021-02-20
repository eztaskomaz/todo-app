import React from "react";
import Todos from "./Todos";


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
    }

    handleInput = (e) => {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        });
    }


    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        const newItems = [...this.state.items, newItem];
        this.setState({
            items: newItems,
            currentItem:{
                text:'',
                key:''
            }
        });
    }

    deleteItem = (key) => {
        const filteredItems = this.state.items.filter( item => item.key !== key );
        this.setState({items: filteredItems});
    }

    setUpdate = (text, key) => {
        const items = this.state.items;
        items.map(item => {
            if(item.key===key) {
                item.text = text;
            }
        })
        this.setState({items: items});
    }

    render() {
        return (
            <div>
                <form id='todo-form' onSubmit={this.addItem}>
                    <input type='text'
                           placeholder='Enter Text'
                           value={this.state.currentItem.text}
                           onChange={this.handleInput}
                    />
                    <button type='submit' disabled={this.state.currentItem === 'a'}>Add Todo</button>
                </form>
                <Todos todos={this.state.items}
                       deleteItem={this.deleteItem}
                       setUpdate={this.setUpdate}
                />
            </div>
        );
    }
}

export default TodoList;