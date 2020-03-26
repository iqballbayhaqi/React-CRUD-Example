import React, { Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {member: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/member')
        .then(response => {
            this.setState({ member: response.data });
        })
        .catch(function(error){
            console.log(error);
        })
    }
    TabRow(){
        return this.state.member.map(function(object, i){
            return <TableRow obj={object} key={i} />
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Member List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Job Title</th>
                            <th>Phone Number</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.TabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}