import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import { ReactDOM } from 'react';
import './css/style.css'

function App() {
  const [input, setInput] = React.useState("")
  const [output, setOutput] = React.useState(0)
  const operator = ['+','-','*','/'];

  const handleButton = value => {
      if(value === '0' && input[input.length - 1] === '0')
         noMultipleZeros();
      else if(value === '.'){
          if(input === ''){
              setInput('0.')
              setOutput('0.')
          }
          else
              noMultipleDecimals(value);
      }
      else{
          setInput((prevInput) => prevInput + value)
          setOutput(value)
      }

  }
  const noMultipleZeros = () => setInput((prevInput) => prevInput)

  const noMultipleDecimals = (value) => { 
      if(input[input.length - 1] === '.')
          return;
      // else if(input.includes('.'))
      //     setInput((prev) => prev)
      else{
          setInput((prevInput) => prevInput + value)
          setOutput(value)
      }
  }

  const total = () => {
      console.log(input)
      const answer = eval(input)
      // setInput((prevInput) => prevInput + "=" + answer)
      // console.log(answer)
      setOutput(answer)
      setInput(answer)
  }
  const reset = () => {
      setInput("");
      setOutput(0);
  }
  const clear = () => setOutput(setInput((prev) => prev.split("").slice(0, prev.length-1).join("")))

  return (
    <>
      <div>
      <h1>JavaScript Calculator</h1>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <div className="calculator">
            <div className="formulaScreen">{input}</div>
            <div className="output" id="display">{output}</div>
            <div className="grid">
              <button className="padButton clear"id="clear" onClick={()=> reset()}>AC</button>
              <button className="padButton back"id="backSpace" onClick={()=> clear()}>C</button>
              <button className="padButton divide" id="divide" onClick={()=> handleButton('/')}>/</button>
              <button className="padButton multiply" id="multiply" onClick={()=> handleButton('*')}>x</button>

              <button className="padButton seven darkGray" id="seven" onClick={()=> handleButton('7')}>7</button>
              <button className="padButton eight darkGray" id="eight" onClick={()=> handleButton('8')}>8</button>
              <button className="padButton nine darkGray" id="nine" onClick={()=> handleButton('9')}>9</button>
              <button className="padButton subtract" id="subtract" onClick={()=> handleButton('-')}>-</button>

              <button className="padButton four darkGray" id="four" onClick={()=> handleButton('4')}>4</button>
              <button className="padButton five darkGray" id="five" onClick={()=> handleButton('5')}>5</button>
              <button className="padButton six darkGray" id="six" onClick={()=> handleButton('6')}>6</button>
              <button className="padButton add" id="add" onClick={()=> handleButton('+')}>+</button>

              <button className="padButton one darkGray" id="one" onClick={()=> handleButton('1')}>1</button>
              <button className="padButton two darkGray" id="two" onClick={()=> handleButton('2')}>2</button>
              <button className="padButton three darkGray" id="three" onClick={()=> handleButton('3')}>3</button>
              <button className="padButton equals " id="equals" onClick={()=> total()}>=</button>
              
              <button className="padButton zero darkGray" id="zero" onClick={()=> handleButton('0')}>0</button>
              <button className="padButton decimal darkGray" id="decimal" onClick={()=> handleButton('.')}>.</button>
            </div>
        </div>
        <div>
            <h2>Designed for Practice</h2>
            <h3>Mustafa Ahmed</h3>
            <p>Jan 2020</p>
        </div>
    </>
  )
}

export default App;
