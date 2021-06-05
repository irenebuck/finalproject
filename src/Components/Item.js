import React from 'react';

export default class Item extends React.Component {
    render() {
        const items = this.props.data.items
        ? this.props.data.items.map((item, index) =>
                <li key={index}>
                    {item.name}
                    <button onClick={e =>
                    this.props.deleteItem(e, this.props.data)}>Delete</button>
                </li>)
        : null;

        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}