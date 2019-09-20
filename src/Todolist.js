import React, { Component } from 'react';
import TodoItems from "./TodoItems.js"
import "./index.css"

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = { items: [] };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(event){
        if (this._input.value !== ""){
            //create new object to hold the new list items 
            var newItem = {
                text: this._input.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    //insert each new item object into the items array     
                    items: prevState.items.concat(newItem)
                };
            })
        }
        this._input.value = "";
        event.preventDefault();
    }

    //this method takes an arguement, which is the items.key
    deleteItem(key){
       var filteredItems = this.state.items.filter(function(item){
            //return only the ones that do NOT equal what you just clicked on 
            //return (item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }

      render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="enter task" ref={(el) => this._input = el}/>
                        <button>Add</button>
                    </form>
                </div>
                <div><TodoItems entries={this.state.items} delete={this.deleteItem}/></div>
            </div>               
        );
    }
}

export default Todolist;








{/*  learnings:

    Ref: 
    create a ref to store the text from the input DOM element below

    refs allow you to access DOM elements directly. all the things you can do with reg Javascript. 
    prevState allows you to make a copy of the state object, avoiding mutating state directly 

    concat new Items returns a whole new array
    so -> we are merging the new Item object (with the properties of text and key)
    TO the items array (the previous state of it)
    all of which creates an array of objects [{...}, {..}, {...}]

    another learning: 
    use Javascript stuff like - map, filter, reduce, etc - in the render method and before the return statement, and then use those variables 
    within the return statement 

    To do:
    -checked! make a colorizer application that displays colors that the user enters in 
    - add a filter component to the to do list app
    - re-do this app until i can do it without looking anything up :)


*/}