import React, { Component } from 'react' 
import partyPoper from './assets/party-popper.jpg'

 class AgeStats extends Component {
     timeSince(date){
     let today = new Date().getTime();
     let other_day = new Date(date).getTime();
     let differences = Math.abs(today - other_day);
      
     let days = Math.floor(differences /(1000*3600*24));
     let years = Math.floor(days/365); 
     days -= years*356;
      
     let months = Math.floor(days/31);
     days -= months*31

     return `${years} years, ${months} months, and ${days} days`
        
     }
  render() {
    return (
      <div>
        <h2>{this.props.date}</h2>
        <h4>Congrats on {this.timeSince(this.props.date)}</h4>
        <img src={partyPoper} alt="party-popper" className="party-popper"/>
      </div>
    )
  }
}
export default AgeStats