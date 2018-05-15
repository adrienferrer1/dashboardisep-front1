import React, { Component } from 'react';


const obj = [{
    name: "onion",
    price: ".99",
    id: 1
}, {
    name: "pepper",
    price: "1.25",
    id: 2
}, {
    name: "broccoli",
    price: "3.00",
    id: 3
}];

class TableRow extends React.Component {
    render() {
        const {data} = this.props;
        const row = data.map((data) =>
            <tr>
                <td key={data.name}>{data.name}</td>
                <td key={data.id}>{data.id}</td>
                <td key={data.price}>{data.price}</td>
            </tr>
        );
        return (
            <span>{row}</span>
        );
    }
}

class Done_tasks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table>
                <TableRow data={this.props.data} />
            </table>
        );
    }
}

export default Done_tasks;
