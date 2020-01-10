import React, { Component } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DateInput from './DateInput';

interface IProps {
  handleChange: (date: Date) => void
}

interface IState {
  selectedOp: string;
  date: Date;
  years: number;
  months: number;
  weeks: number;
  days: number;
}

class DateBlock extends Component<IProps, IState> {
  state: IState;
  handleOpClick = (op: string) => {
    this.setState({ selectedOp: op });
  }
  handleTodayClick = (today: Date) => {
    this.setState({ date: today });
  }
  handleYears = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    await this.setState({years: value});
    this.updateResult();
  }
  handleMonths = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    await this.setState({months: value});
    this.updateResult();
  }
  handleWeeks = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    await this.setState({weeks: value});
    this.updateResult();
  }
  handleDays = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    await this.setState({days: value});
    this.updateResult();
  }
  updateResult = () => {
    const date = this.state.date;  
    var year = date.getUTCFullYear() + this.state.years;
    var month = date.getUTCMonth() + this.state.months;
    var day = date.getUTCDate() + (this.state.weeks * 7) + this.state.days;
    const newDate = new Date(year, month, day);
    this.props.handleChange(newDate);
  }

  constructor(props: any) {
    super(props);

    this.state = {
      selectedOp: "add",
      date: null,
      years: 0,
      months: 0,
      weeks: 0,
      days: 0
    };
  }
  render() {
    return (
      <div className="date-block">
        <DateInput title={"Start Date"} handleTodayClick={this.handleTodayClick}/>
        <div className="operations">
          <button className={`btn ${this.state.selectedOp === "add" ? "selected" : ""}`} onClick={() => this.handleOpClick("add")}><FontAwesomeIcon icon={faPlus} /></button>
          <button className={`btn ${this.state.selectedOp === "substract" ? "selected" : ""}`} onClick={() => this.handleOpClick("substract")}><FontAwesomeIcon icon={faMinus} /></button>
        </div>
        <div className="counts">
          <div className="count">
            <input type="number" placeholder="0" value={this.state.years} onChange={this.handleYears}></input>
            <p>years</p>
          </div>
          <div className="count">
            <input type="number" placeholder="0" value={this.state.months} onChange={this.handleMonths}></input>
            <p>months</p>
          </div>
          <div className="count">
            <input type="number" placeholder="0" value={this.state.weeks} onChange={this.handleWeeks}></input>
            <p>weeks</p>
          </div>
          <div className="count">
            <input type="number" placeholder="0" value={this.state.days} onChange={this.handleDays}></input>
            <p>days</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DateBlock;
