import React from 'react';
import './Todos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todos = (props) => {
    return props.todos.map(todo => {
        return <div className='todos' key={todo.key}>
            <p>
                <input type='text'
                       id={todo.key}
                       value={todo.text}
                       onChange={(e) => props.setUpdate(e.target.value, todo.key)}/>
                <span>
                    <FontAwesomeIcon
                        className="faicons"
                        icon={faTrash}
                        onClick={() => props.deleteItem(todo.key)}
                    />
                </span>
            </p>
        </div>
    });
}

export default Todos;