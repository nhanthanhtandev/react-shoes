import React, { Component } from 'react'

export default class Cart extends Component {
    renderRowCart = () => {
        let { dataArray } = this.props;
        return dataArray.map((shoes) => {
            return (<tr key={shoes.id}>
                <td>{shoes.name}</td>
                <td><img className='w-25' src={shoes.image} alt="" /></td>
                <td>
                    {shoes.quantity}
                </td>
                <td>{shoes.price}</td>

            </tr>);
        });
    };
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRowCart()}
                    </tbody>
                </table>
            </div>
        )
    }
}
