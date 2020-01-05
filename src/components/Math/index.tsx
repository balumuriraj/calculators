import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import '../../styles/sass/math.scss';
import * as math from 'mathjs';

interface IProps {
  input: string;
}

interface IState {
  input: string;
}

class Math extends Component<IProps, IState> {
  state: IState;
  addToInput = (val: string) => {
    this.setState({input: this.state.input + val});
  }
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  constructor (props: any) {
    super(props);

    this.state= {
      input: ""
    };
  }
  render() {
    return (
      <div className="math-app">
        <div className="wrapper">
          <div className="container">
            <Input input={this.state.input}></Input>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={this.addToInput}>.</Button>
              <Button handleClick={this.handleEqual}>=</Button>
              <Button handleClick={this.addToInput}>-</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Math;
