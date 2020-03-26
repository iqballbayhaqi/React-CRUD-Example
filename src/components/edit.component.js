import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:4000/member/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  person_name: response.data.person_name, 
                  job_title_name: response.data.job_title_name,
                  phone_number: response.data.phone_number });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
  
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value
      });
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
      axios.post('http://localhost:4000/member/update/'+this.props.match.params.id, obj)
          .then(res => console.log(res.data));
      
      this.props.history.push('/index');
    }

    render() {
        return(
          <div style={{ marginTop: 10 }}>
          <h3 align="center">Update Member</h3>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>Person Name:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.person_name}
                    onChange={this.onChangePersonName}
                    />
              </div>
              <div className="form-group">
                  <label>Job Title Name: </label>
                  <input type="text" 
                    className="form-control"
                    value={this.state.job_title_name}
                    onChange={this.onChangeJobTitleName}
                    />
              </div>
              <div className="form-group">
                  <label>Phone Number: </label>
                  <input type="text" 
                    className="form-control"
                    value={this.state.phone_number}
                    onChange={this.onChangePhoneNumber}
                    />
              </div>
              <div className="form-group">
                  <input type="submit" 
                    value="Update Member" 
                    className="btn btn-primary"/>
              </div>
          </form>
      </div>
        )
    }
}