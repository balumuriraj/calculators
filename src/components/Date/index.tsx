import React, { Component } from 'react';
import DateBlock from './DateBlock';
import CountBlock from './CountBlock';
import '../../styles/sass/Date/index.scss';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

interface IProps {}

interface IState {
  selectedTab: string;
  month: string;
  day: string;
  year: string;
}

class DateComponent extends Component<IProps, IState> {
  state: IState;
  handleTabClick = (tab: string) => {
    this.setState({selectedTab: tab});
  }
  handleChange = (date: Date) => {
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    this.setState({ month: String(month), day: String(day), year: String(year) });
  }

  constructor(props: any) {
    super(props);

    this.state = {
      selectedTab: "date",
      month: "",
      day: "",
      year: ""
    };
  }
  render() {
    return (
      <div className="date-app">
        <div className="wrapper">
          <header>
            <div className="back"><Link to={`/`}><FontAwesomeIcon icon={faLongArrowAltLeft} /> back</Link></div>
            <p className="title">Dates</p>
          </header>

          <div className="menu-container">
            <div className={`btn ${this.state.selectedTab === "date" ? "selected" : ""}`} onClick={() => this.handleTabClick("date")}>Add Days</div>
            <div className={`btn ${this.state.selectedTab === "count" ? "selected" : ""}`} onClick={() => this.handleTabClick("count")}>Count Days</div>
          </div>
          <div className="container">
            <div className={`block ${this.state.selectedTab === "date" ? "visible" : ""}`}>
              <DateBlock handleChange={this.handleChange} />
            </div>
            <div className={`block ${this.state.selectedTab === "count" ? "visible" : ""}`}>
              <CountBlock />
            </div>
          </div>

          <div className="result-block">
            <div className="inputs">
              <input type="number" placeholder="month" value={this.state.month} onChange={() => {}}></input>
              <input type="number" placeholder="day" value={this.state.day} onChange={() => {}}></input>
              <input type="number" placeholder="year" value={this.state.year} onChange={() => {}}></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DateComponent;
