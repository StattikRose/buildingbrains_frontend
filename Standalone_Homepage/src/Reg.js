import React, { Component } from 'react';

class Reg extends Component {
	constructor(props) {
		super(props);
		this.state = {firstname: '', lastname: '', email: '', emailConfirmation: '', password: '', passwordConfirmation: '',response: ''};
	 }
	 handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	handlePasswordChange(event) {
	   this.setState({password: event.target.value});
	}
	handleEmailConfirmation(event) {
		this.setState({emailConfirmation: event.target.value});
	}
	handlePasswordConfirmation(event) {
	   this.setState({passwordConfirmation: event.target.value});
	}
	handleFirstChange(event) {
		this.setState({firstname: event.target.value});
	}
	handleLastChange(event) {
	   this.setState({lastname: event.target.value});
	}
	attemptRegistration() {
		  if(this.state.email === this.state.emailConfirmation) {
			  if(this.state.password === this.state.passwordConfirmation) {
				  let data = {
					  firstname: this.state.firstname,
					  lastname: this.state.lastname,
					  email: this.state.email,
					  password: this.state.password
				  };
				  let head = [
					  'Accept': 'application/json',
					  'Content-Type': 'application/json'
				  ];
				  let requestParams = {
					  method: 'POST',
					  headers: head,
					  body: JSON.stringify(data)
				  };
				  fetch('http://localhost:3000/users/signup', requestParams)
					  .then(status)
					  .then((responseData) => {
							this.setState({
							  response: responseData
							});
						})
					  .then(function(responseData) {
						console.log('request succeeded with json response', responseData)
					  }).catch(function(error) {
						console.log('request failed', error)
					 })
				  if (this.state.response.result === '0') {
					  alert('Resgistration success');
					  this.transitionTo("/Home");
				  }
				  else {
					  alert('Registration fail');
				  }
			  }
			else {
				alert('The passwords you entered did not match. Please try again');
			}
		}
		else {
			alert('The email addresses you entered did not match. Please try again');
		}
	  }
  render() {
      return (
            <div className="col-sm-6 col-sm-offset-4 col-md-8 col-md-offset-0 main">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-12 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title" style={{'text-align': 'center'}}>Sign Up Here:</h3>
                                </div>
                                <div className="panel-body">
									
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="Your First Name" name="firstname" type="text" onChange={this.handleFirstChange.bind(this)}/>
											</div>

											<div className="form-group">
												<input className="form-control" placeholder="Your Last Name" name="lastname" type="text" onChange={this.handleLastChange.bind(this)}/>
											</div>

											<div className="form-group">
											  <input className="form-control" placeholder="Your E-Mail Address" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
											</div>
											
											<div className="form-group">
											  <input className="form-control" placeholder="Confirm Your E-Mail Address" name="emailConfirmation" type="text" onChange={this.handleEmailConfirmation.bind(this)}/>
											</div>
											
											<div className="form-group">
												 <input className="form-control" placeholder="Your Password" name="password" type="password" onChange={this.handlePasswordChange.bind(this)}/>
											</div>
											
											<div className="form-group">
											  <input className="form-control" placeholder="Confirm Your Password" name="passwordConfirmation" type="password" onChange={this.handlePasswordConfirmation.bind(this)}/>
											</div>
											
											<button className="btn btn-lg btn-primary btn-block" onClick={this.attemptRegistration.bind(this)} >Sign Up</button>
										</fieldset>
									
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}




export default Reg;
