import React from 'react';
import classnames from 'classnames';
import './Calendar.scss';

import * as calendar from './calendarFunct';


export default class Calendar extends React.Component {

  static defaultProps = {
    date: new Date(),
    years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    weekDayNames: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    onChange: Function.prototype
  }

  state={
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null,

  }

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthBtnClick = (e) => {
    e.preventDefault();
    const date = new Date(this.year, this.month - 1);
    console.log(date);
    this.setState({date});
  };

  handleNextMonthBtnClick = (e) => {
    e.preventDefault();
    const date = new Date(this.year, this.month + 1);
    console.log(date);
    this.setState({date});
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);
    console.log(date);
    this.setState({date});


  };

  handleDayClick = date => {
    console.log(date);
    this.setState({selectedDate: date});
    this.props.onChange(date);

    this.props.setdata(date);

    
  };


  

  render() {
    const {years, monthNames, weekDayNames} = this.props;
    const {currentDate, selectedDate} = this.state;

    const monthData = calendar.getMonthData(this.year, this.month);

    

    return (
      <div className="calendar-wrap">
        <header>
          <button onClick={this.handlePrevMonthBtnClick}>{'<'}</button>

          <select
            ref = {element => this.monthSelect = element}
            value={this.month}
            onChange={this.handleSelectChange}
          >
            {monthNames.map((name,index)=> 
              <option key={name} value={index}>{name}</option>
            )}
          </select>

          <select 
            ref = {element => this.yearSelect = element}
            value={this.year}
            onChange={this.handleSelectChange}
          >
            {years.map((year)=> 
                <option key={year} value={year}>{year}</option>
            )}
          </select>

          <button onClick={this.handleNextMonthBtnClick}>{'>'}</button>
        </header>
        <table>
          <thead>
            <tr>
              {weekDayNames.map((day)=> 
                  <th key={day}>{day}</th>
              )}
            </tr>
          </thead>
          <tbody>
                {monthData.map((week,index)=> 
                  <tr className="week" key={index}>
                     {week.map((date,index)=> date ?
                          <td 
                          key={index}
                          className={classnames('day', {
                            'today': calendar.areEqual(date,currentDate),
                            'selected': calendar.areEqual(date,selectedDate),
                          })}
                          onClick={() => this.handleDayClick(date)}
                          >
                            {date.getDate()}
                          </td>
                          :
                          <td key={index}></td>
                      )}
                  </tr>
                )}
          </tbody>
        </table>
      </div>
    )
  }
}
