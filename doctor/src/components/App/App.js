import React from 'react';
import './App.scss';
import Header from '../Header';
import logo from '../Header/img/logo.png';
import Input from '../Form/Input';
import Date from '../Form/Date';
import calendar from '../Form/Date/img/calendar.png';
import Btn from '../Form/Btn';
import Switch from '../Switch';


export default class App extends React.Component {

  state = { 
    isLighttheme: true 
  }

  callbackFunction = (childData) => {
      this.setState({isLighttheme: childData})
  }


  render() {
    return (
      <div
        className={
          this.state.isLighttheme ? 
          'app' : 
          'app app--night'
        }
      >
        <div className="app__inner">
          <div className="app__inside">
            <Switch parentCallback = {this.callbackFunction} />
            <Header img={logo} title="Make an appointment for a doctor's consultation" />
            <form method="post" action="">
              <Input text="Your name" type="text" data="name" />
              <Input text="Your phone" type="tell" data="tell" />
              <Input text="Your email" type="email" data="email" />
              <Date img={calendar} />
              <Btn text="Send" />
            </form>
            
          </div>
        </div>
      </div>
    );
  }

  
}

