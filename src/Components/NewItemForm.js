import React from 'react';

export default class NewItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.name.length > 2) {
            let newItem = {
                ...this.props.item,
            };
            delete newItem._id;
            this.props.updateItemFx(this.props.item._id, newItem);
            this.setState({ name: '',});
        }
    };

    render() {
        return (
            <div>
                <input type='text' placeholder='Grocery Item To Buy' onChange={this.handleChange} value={this.state.name} />
                <button onClick={this.handleClick}>Add Item</button>
            </div>
        )
    }
}