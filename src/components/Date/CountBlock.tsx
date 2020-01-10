import React, { Component } from 'react';
import DateInput from './DateInput';

interface IProps { }

interface IState {
  startDate: Date;
  endDate: Date;
}

class CountBlock extends Component<IProps, IState> {
  state: IState;
  handleTodayStartClick = (today: Date) => {
    this.setState({ startDate: today });
  }
  handleTodayEndClick = (today: Date) => {
    this.setState({ startDate: today });
  }

  constructor(props: any) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null
    };
  }
  render() {
    return (
      <div className="count-block">
        <DateInput title={"Start Date"} handleTodayClick={this.handleTodayStartClick} />
        <DateInput title={"End Date"} handleTodayClick={this.handleTodayEndClick} />
      </div>
    );
  }
}

export default CountBlock;
