import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import '../../styles/sass/math.scss';
import * as math from 'mathjs';
import { faTrashAlt, faCopy } from '@fortawesome/free-regular-svg-icons';
import { faBackspace, faPlus, faMinus, faTimes, faEquals, faDivide, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

interface IProps {}

interface IState {
  input: string;
  result: string;
}

const isOperator = (val: any) => {
  return val && isNaN(val) && val !== ".";
}

class Math extends Component<IProps, IState> {  
  state: IState;
  addToInput = (val: string) => {
    const stateInput = this.state.input.trim();
    const lastChar = stateInput[stateInput.length - 1];
    const isLastCharOp = stateInput.length > 0 ? isOperator(lastChar) : false;
    const isLastCharEquals = isLastCharOp && lastChar === "=";
    const isValOp = isOperator(val);

    let input: string;

    if (isValOp && isLastCharOp) {
      input = stateInput.replace(/.$/, ` ${val} `);
    } else if (isLastCharEquals) {
      input = val;
    } else {
      input = this.state.input + (isValOp ? ` ${val} ` : `${val}`);
    }

    this.setState({ input });

    const expr = isValOp ? input.trim().replace(/.$/, "") : input;
    this.setState({ result: math.format(math.evaluate(expr.trim()), {notation: 'auto'}) });   
  }
  handleClear = () => {
    this.setState({ result: ""});
    this.setState({ input: "" });
  }
  handleBackSpace = () => {
    const stateInput = this.state.input.trim();
    const input = stateInput.replace(/.$/, "").trim();
    this.setState({ input });
    const lastChar = input[input.length - 1];
    const isLastCharOp = input.length > 0 ? isOperator(lastChar) : false;
    const expr = isLastCharOp ? input.trim().replace(/.$/, "") : input;
    const result = (expr && math.format(math.evaluate(expr.trim()), {notation: 'auto'})) || "";
    this.setState({ result });   
  }
  handleCopy = () => {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = this.state.result;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  constructor(props: any) {
    super(props);

    this.state = {
      input: "",
      result: ""
    };
  }
  render() {
    return (
      <div className="math-app">
        <div className="wrapper">
          <header>
            <div className="back"><Link to={`/`}><FontAwesomeIcon icon={faLongArrowAltLeft} /> back</Link></div>
            <div className="title">Math</div>
          </header>
          <div className="container">
            <Input input={this.state.input} result={this.state.result}></Input>
            <div className="rows-block">
              <div className="row">                
                <Button handleClick={this.handleClear} value=""><FontAwesomeIcon icon={faTrashAlt} style={{ color: "#f6416c" }} /></Button>
                <Button handleClick={this.handleBackSpace} value=""><FontAwesomeIcon icon={faBackspace} style={{ color: "#f1c40f" }} /></Button>
                <Button handleClick={this.handleCopy} value=""><FontAwesomeIcon icon={faCopy} style={{ color: "#3498db" }} /></Button>
                <Button handleClick={this.addToInput} value="="><FontAwesomeIcon icon={faEquals} style={{ color: "#2ecc71" }} /></Button>
                
              </div>
              <div className="row">
                <Button handleClick={this.addToInput} value="7">7</Button>
                <Button handleClick={this.addToInput} value="8">8</Button>
                <Button handleClick={this.addToInput} value="9">9</Button>
                <Button handleClick={this.addToInput} value="/"><FontAwesomeIcon icon={faDivide} /></Button>                
              </div>
              <div className="row">
                <Button handleClick={this.addToInput} value="4">4</Button>
                <Button handleClick={this.addToInput} value="5">5</Button>
                <Button handleClick={this.addToInput} value="6">6</Button>
                <Button handleClick={this.addToInput} value="*"><FontAwesomeIcon icon={faTimes} /></Button>                
              </div>
              <div className="row">
                <Button handleClick={this.addToInput} value="1">1</Button>
                <Button handleClick={this.addToInput} value="2">2</Button>
                <Button handleClick={this.addToInput} value="3">3</Button>
                <Button handleClick={this.addToInput} value="-"><FontAwesomeIcon icon={faMinus} /></Button>                
              </div>
              <div className="row">
                <Button handleClick={this.addToInput} value="0">0</Button>
                <Button handleClick={this.addToInput} value=""></Button>
                <Button handleClick={this.addToInput} value=".">.</Button>
                <Button handleClick={this.addToInput} value="+"><FontAwesomeIcon icon={faPlus} /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Math;
