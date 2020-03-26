import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return(
            <tr>
                <td>
                    {this.props.obj.person_name}
                </td>
                <td>
                    {this.props.obj.job_title_name}
                </td>
                <td>
                    {this.props.obj.phone_number}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;