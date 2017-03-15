import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import { Link } from 'react-router';
import Nav from '../../../components/Nav.js';
import Headers from '../../../components/Headers.js';

class Devices extends Component {
	 constructor(props) {
		super(props);
		this.state = {sortby: '', deviceList: ''};
	 }
	 getDevices() {
		 let token = Auth.getToken();
		 let hubID = Auth.getHubID();
		 
		 let head = {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
		      'x-access-token': token
		  };
		  let data = {
			  hubID: hubID
		  };		  
		 fetch('http://localhost:3000/devices/', {
			  method: 'POST',
			  headers: head,
			  body: JSON.stringify(data),
			}).then(status)
			  .then((response) => response.json())
			  .then(json => {
				console.log(json);
				if (json.result === 0) {
					  this.setState({deviceList: json.devices});
			    }
				else {
					  alert('Something went wrong when trying to fetch the devices. Please try again.');
					  return -1;
				}
			  })
	 }
	 sortByName(devices) {
		 if(!devices) {
			 return;
		 }
		 let deviceMappings = [];
		 for(var device=0; device<devices.length; device++) {
			 var dname = devices[device].name;
			 var did = devices[device]._id;
			 var map = {name: dname,id: did};
			 deviceMappings.push(map);
		 }
		 
		 deviceMappings.sort(
			function (a, b) { return ((a.name>b.name) ? 1 : (a.name<b.name) ? -1 : 0); }
		);
		 return(
			 <ul>

			  {deviceMappings.map(dev => (
				<li key={dev.id}>
					<h3>
						<Link to={`/devices/${dev.id}`}>{dev.name}</Link>
					</h3>
				</li>
			  ))}

			</ul>);
	 }
	 sortByType(devices) {
		 if(!devices) {
			 return;
		 }
		 return 3;
		//create arrays for each device type 
		for(var device=0; device<devices.length; device++) {
			 //check type and put pair of devicename and id into appropriate array
			 
		 }
		 
		 //display non-empty arrays
	 }
	 sortByGroup(devices) {
		 if(!devices) {
			 return;
		 }
		  return 1;
		 //get user groups and create an array for each
		 for(var device=0; device<devices.length; device++) {
			 //check group(s) and put pair of devicename and id into appropriate array
			 
		 }
		
		 //display non-empty arrays
	 }
	 displayDevices() {
		 this.getDevices();
		 var devices = this.state.deviceList;
		 switch(this.state.sortby) {
			 case 'bytype': {
				 return this.sortByType(devices);
			 }
			 case 'bygroup': {
				 return this.sortByGroup(devices);
			 }
			 default: {
				 return this.sortByName(devices);
			 }
		 }
	 }
	 
	 handleSort(value) {
		 this.setState({sortby: value});
	 }
	
     render() {
		var devs = this.displayDevices();
		if(!devs) {
			devs = (<h3> No Devices Found With Your Hub. Add One By Clicking the Link Below </h3>)
		}
        return (
             <div className="Devices">
				<Headers />
				<Nav />
                <div className="col-md-6 col-md-offset-4">
					<div className="rcorners0">
						<div className="text-center pb-5 pl-2 mb-5 ml-5"> 
							<h3> Show my devices sorted by: </h3>
							<div className="btn-group" data-toggle="buttons">
								<label className="btn btn-default active" onClick={() => this.handleSort("byname")}>
									<input type="radio" name="devices"/> Device Name
								</label>
								<label className="btn btn-default" onClick={() => this.handleSort("bytype")}>
									<input type="radio" name="devices"/> Device Type
								</label>
								<label className="btn btn-default" onClick={() => this.handleSort("bygroup")}>
									<input type="radio" name="devices"/> Device Group
								</label>
							</div>
							<div className="row justify-content-md-center">
								{devs}
							</div>
							<div>
								<h3>
									<Link to={'/DeviceAdder'}> Want to Add a New Device? Click HERE </Link>
								</h3>
							</div> 
						</div>
					</div>
                </div>
            </div>
    );
  }
  
}
export default Devices;
