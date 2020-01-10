import React, { Component } from 'react';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IProps = {
  title: string;
  handleTodayClick: (today: Date) => void;
}

interface IState {
  month: string;
  day: string;
  year: string;
}

class DateInput extends Component<IProps, IState> {
  state: IState;

  handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ month: event.target.value });
  }
  handleDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ day: event.target.value });
  }
  handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ year: event.target.value });
  }

  handleTodayClick = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    this.setState({ month: String(month), day: String(day), year: String(year) });
    this.props.handleTodayClick(new Date(year, month - 1, day));
  }

  constructor(props: any) {
    super(props);

    this.state = {
      month: "",
      day: "",
      year: "",
    };
  }

  render() {
    return (
      <div className="date-input">
        <header>
          <p>{this.props.title}</p>
          <div className="btns">
            <div className="btn" onClick={this.handleTodayClick}>Today</div>
            <div className="btn"><FontAwesomeIcon icon={faCalendarAlt} /> Pick a Date</div>
          </div>
        </header>
        <div className="inputs">
          <input type="number" placeholder="mm" value={this.state.month} onChange={this.handleMonth}></input>
          <input type="number" placeholder="dd" value={this.state.day} onChange={this.handleDay}></input>
          <input type="number" placeholder="yyyy" value={this.state.year} onChange={this.handleYear}></input>
        </div>
      </div>
    );
  }
}

export default DateInput;
