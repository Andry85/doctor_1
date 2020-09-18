import React from 'react';
import './Date.scss';
import Calendar from '../Date/Calendar/Calendar';
import { connect } from 'react-redux';

import {sendDate} from '../../../actions/getDataActions';



class Date extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      isCalendarVisible: false,
      clickedOutside: false
    };
  }

  setdataFun = (data) => {
      this.props.sendDate(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
  }
  openCalendar = () => {
      this.setState({ isCalendarVisible: true });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ isCalendarVisible: false });
    }
  };

  handleClickInside = () => {
    this.setState({ isCalendarVisible: true });
  };
  
  

  render() {
    return (
      <div className="form-field">
        <span className="form-field__input">
          {this.props.dateTime}
        </span>
        <img 
          className="form-field__calendar" 
          src={this.props.img} 
          alt=""
          onClick={this.openCalendar}
        />

        <div ref={this.myRef} onClick={this.handleClickInside}>
          {this.state.isCalendarVisible ? 
            <Calendar setdata = {this.setdataFun}  />
          : null }
        </div>
        
        
      </div>
    );
  }

}


// Map Redux state to React component props
const mapStateToProps = (state) => {
  let dateTime = state.getFormDataReduced.date;
  return {
	  dateTime
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    sendDate: (time) => {
      dispatch(sendDate(time))
    }
  }
}

// Connect Redux to React
export default connect(mapStateToProps, mapDispatchToProps)(Date)

