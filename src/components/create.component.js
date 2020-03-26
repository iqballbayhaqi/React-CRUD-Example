import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeJobTitleName = this.onChangeJobTitleName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            job_title_name: '',
            phone_number: ''
        }
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value
        })
    }
    onChangeJobTitleName(e) {
        this.setState({
            job_title_name: e.target.value
        })
    }
    onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            job_title_name: this.state.job_title_name,
            phone_number: this.state.phone_number
        };
        axios.post('http://localhost:4000/member/add', obj)
        .then(res => console.log(res.data));

        this.setState({
            person_name: '',
            job_title_name: '',
            phone_number: ''
        })
    }

    render() {
        return(
            <div style={{marginTop: 10}}>
                <h3>Add New Member</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name: </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Job Title Name: </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.job_title_name}
                        onChange={this.onChangeJobTitleName} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Phone Number: </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.phone_number}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Member" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}