import React, { Component } from 'react';
import "./index.css"

class TodoItems extends Component {
    constructor (props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(items){
        return (
            <li onClick={() => this.delete(items.key)} key={items.key}>{items.text}</li>
        )
    }
    //we are passing the "delete" method as a property from the parent component
    //here, we are defining the delete method in the context of this class component -
    //basically saying that this.delete === this.props.delete(key);
    delete(key){
        this.props.delete(key);
    }

    render (){
        var items = this.props.entries;
        //create a call back function to loop through each item and render it 
        var listItems = items.map(this.createTasks);

        return (
            <ul className="list">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;