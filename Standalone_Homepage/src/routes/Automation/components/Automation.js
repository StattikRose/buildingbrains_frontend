import React, { Component } from 'react';
import Auth from '../../../Auth.js';
import Auto from '../../../Automation.js';
class Automation extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
      deviceList: [],
      automationList: [],
      automationCount: '',
      checkedList: [],
      automationName: ''
    };
	 }
    componentWillMount() {
      Auto.getDevices()
        .then(
          json => {
            this.setState({deviceList: json.devices})
            Auto.getAutomation().then(
              json => {
                 this.setState({automationList : json.automations
                 })
                 if(this.state.automationList === undefined){
                    this.setState({automationList: [], automationCount: 0})
                 }else{
                    this.setState({automationCount: this.state.automationList.length})
                 }
                 console.log("State is now")
                 console.log(this.state)
                 console.log(this.state.automationList[0].name)
              }
            )
          }
        )

        
    }
    handleProfileSubmit(){
      Auth.updateProfileInfo(this.state.first, this.state.last);
    }
    handleSubmit(){
      console.log(this.state)
      Auto.addAutomation(this.state.checkedList, this.state.automationName).then(
        json => {
          console.log(json)
          location.reload()
        })
    }
     handleName(e){
       this.setState({automationName : e.target.value})
    }

    handleCheck(e){
      console.log(e)
      console.log(e.target)
      console.log(e.target.dataset.id)
       var ch = {
            device: e.target.dataset.id,
            setting: e.target.dataset.state
       }
          
      if(e.target.dataset.checked === "false"){
          this.state.checkedList.push(ch)
          e.target.dataset.checked= "true"
      }else{
          var newArray = this.state.checkedList.filter(
            (obj) => {
              console.log(obj.device)
              console.log(obj.device === ch.device)
              return obj.device !== ch.device
            }
          )
          this.setState({checkedList: newArray})
      }
    }
    render() {
      
      return (
        <div className="rcorners0">
        <div className="h1 text-left"> Automation Page </div> 
        <div>
          <ul  className="nav nav-tabs">
            <li className="active">
              <a href="#1" data-toggle="tab">Use a stored automation</a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">Save an automation</a>

            </li>
          </ul>
        </div>


        <div className="tab-content">
        <div className="tab-pane fade in active" id="1">

            <br/>
          <div className="form-group">
              <label for="sel1"> Choose an stored automation:</label>
              <select className="form-control" id="sel1">
              {this.state.automationList.map( automation=>
                 <option>{automation.name}</option>
              )}
              </select>
          </div>

      <div align="left" className="updateButton">
              <button className="btn btn-lg btn-primary  " type="submit" onClick={this.handleProfileSubmit.bind(this)} >Update</button>
            </div>
          </div>
          




          <div className="tab-pane" id="2">
            <br/>
            <div className="form-group">
                <label for="inputdefault">Set your new Automation Name</label>
                <input className="form-control" id="inputdefault" type="text" onChange={this.handleName.bind(this)}/>
            </div>
                <label for="inputdefault">Select the devices you want to include</label>
              <ul>
              {this.state.deviceList.map(device =>
                <li>
                  <label className="checkbox-inline">
                    <input type="checkbox" data-checked="false" data-id={device._id} data-state={device.state} onChange={this.handleCheck.bind(this)}/>
                      {device.name}, State: {device.state} 
                  </label>
                </li>
              )}
              </ul> 
              <div align="left" className="updateButton">
              <button className="btn btn-lg btn-primary  " type="submit" onClick={this.handleSubmit.bind(this)} >Add New Automation</button>
              </div>
          </div>           
          
			</div>
			</div>

        );
    }
}

export default Automation;