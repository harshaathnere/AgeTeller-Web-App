import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form,Button, FormControl} from 'react-bootstrap'
import AgeStats from './AgeStats';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newDate: '',
       birthdays: '1994-06-21',
       showState: true
    }
  }

  getValue(event) {
  this.setState({
    newDate: event.target.value
    
  })
  console.log(this.newDate)
  }
  changeBirthday(){
  console.log(this.state)
  this.setState({
    birthdays: this.state.newDate
  })
  }
  render(){
  return (
    <div className="App">
      <Form inline>
      <h2>Input Your Birthday!!</h2>
      <FormControl  onChange={this.getValue.bind(this)}   type="date">
      </FormControl>
      {''}
      <Button onClick={this.changeBirthday.bind(this)}>Submit</Button>
      {
        this.state.showState ? 
        <div className="fade age-stats"><AgeStats date={this.state.birthdays}/></div>
          : <div></div>
      }
     
      </Form>
      
    </div>
  );
  }
}

export default App;
