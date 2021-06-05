import React from 'react';
import APIfile from './APIFile';
import NewItemForm from './NewItemForm';
// import Item from './Item.';

export default class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: [],
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    fetchItems = () => {
        APIfile.myGet().then((json) => {
            this.setState( { items: json } )
        });
    };

    addItem = (items) => {
        APIfile.myPost(items).then((json) => {
            this.fetchItems();
        });
    };

    deleteItem = (id) => {
        APIfile.myDelete(id).then(() => {
            this.fetchItems();
        });
    }

    updateItem = (id, newItem) => {
        APIfile.myPut(id, newItem).then(() => {
            this.fetchItems();
        });
    }

    componentDidMount() {
        this.fetchItems();
    }

    render() {
        let myArr = this.state.items.map((item) => 
        <NewItemForm key={item._id} item={item.name} deleteItemFx={this.deleteItem} updateItemFx={this.updateItem} />
        );

    return(
        <div>
            { myArr }
        </div>
        )
    }
}