import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;