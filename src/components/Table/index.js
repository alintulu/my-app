import React, { Component } from 'react'
import './Table.css';

class Table extends Component {

    renderTableData(images) {
        return images.map((student, index) => {
        const { id, name, tag, createdAt } = student //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{tag}</td>
                <td>{createdAt}</td>
            </tr>
        )
        })
    }

    renderTableHeader(images) {
        let header = Object.keys(images[0])
        return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        var test = this.props;
        console.log({test}.test.images.images)
        return (
        <div>
            <table id='students'>
                <tbody>
                    <tr>{this.renderTableHeader({test}.test.images.images)}</tr>
                    {this.renderTableData({test}.test.images.images)}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Table