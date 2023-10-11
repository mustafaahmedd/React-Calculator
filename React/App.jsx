import reactLogo from './assets/react.svg'
import React from 'react';
import ReactDOM  from 'react-dom/client';
import './css/style.css'

function App() {
  const [input, setInput] = React.useState("")
  const [output, setOutput] = React.useState(0)
  const [equals, setEquals] = React.useState(false)
  const operators = ['+','-','*','/'];

  const handleNumbers = (val) => {

    if(equals)
      reset();
    if(val === '0'){
      const parts = input.split(/([+\-*/])/);
      let lastPart = parts[parts.length - 1];

      //starting case
      if(input === '0' || (lastPart[0] === '0' && !lastPart.includes('.') && !/^[1-9]$/.test(lastPart[1]) )) 
        return; 
      else
        addDigit(val);
    }
    else
      addDigit(val);
  }

  const addDigit = (val) => {
    const temp = String(output);
    setInput((prevInput) => prevInput + val);

    if (temp === '0' || operators.some(operator => temp.includes(operator))) 
      setOutput(val);
    else
        setOutput((prevOutput) => prevOutput + val);
    /* setInput((prevInput) => prevInput + val)
    (temp[0] === '0' || operators.some(operator => temp.includes(operator)))
      ? setOutput(val) 
        :  setOutput((prevOutput) => prevOutput + val) */
  }
  
  const handleDecimal = () => {
      // Split the input string based on operators
    const parts = input.split(/([+\-*/])/);
    const lastPart = parts[parts.length - 1];

    /*(equals || input === '') 
        ? (setInput('0.'), 
          setOutput('0.'), 
          setEquals(false), 
          console.log("first decimal condition",equals)) 
          : (!lastPart.includes('.')) 
            ? (console.log("No decimal before"),
              setInput((prevInput) => prevInput + '.'),
              setOutput((prevOutput) => prevOutput + '.'))
              : console.log("nothing worked"); */

    if(equals || input === ''){
      setInput('0.')
      setOutput(0 + '.')
      setEquals(false)
    }
    else{
      if (!lastPart.includes('.')) {
        console.log("No decimal in last digits")
        setInput((prevInput) => prevInput + '.');
        setOutput((prevOutput) => prevOutput + '.');
      }
    }
  }
  
  const handleOperators = (operator) => {
    if(equals){
      setInput(output + operator);
      setOutput(operator)
      setEquals(!equals)
    }
    else if(!equals){
      setInput((prev) => prev + operator)
      setOutput(operator)
    }
  }

  const total = () => {
      const answer = math.evaluate(input)
      setInput((prevInput) => prevInput + "=" + answer)
      setOutput(answer)
      setEquals(true)
  }

  const reset = () => {
    setInput("");
    setOutput(0);
    setEquals(false);
  }

  const clear = () => {setOutput(setInput((prev) => prev.split("").slice(0, prev.length-1).join("")))}

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
              <button className="padButton clear" id="clear" onClick= {reset} >AC</button>
              <button className="padButton back" id="backSpace" onClick={()=> clear()}>C</button>
              <button className="padButton divide" id="divide" onClick={()=> handleOperators('/')}>/</button>
              <button className="padButton multiply" id="multiply" onClick={()=> handleOperators('*')}>x</button>

              <button className="padButton seven darkGray" id="seven" value="7" onClick={()=> handleNumbers('7')}>7</button>
              <button className="padButton eight darkGray" id="eight" value="8" onClick={()=> handleNumbers('8')}>8</button>
              <button className="padButton nine darkGray" id="nine" value="9" onClick={()=> handleNumbers('9')}>9</button>
              <button className="padButton subtract" id="subtract" onClick={()=> handleOperators('-')}>-</button>

              <button className="padButton four darkGray" id="four" value="4" onClick={()=> handleNumbers('4')}>4</button>
              <button className="padButton five darkGray" id="five" value="5" onClick={()=> handleNumbers('5')}>5</button>
              <button className="padButton six darkGray" id="six" value="6" onClick={()=> handleNumbers('6')}>6</button>
              <button className="padButton add" id="add" onClick={()=> handleOperators('+')}>+</button>

              <button className="padButton one darkGray" id="one" value="1" onClick={()=> handleNumbers('1')}>1</button>
              <button className="padButton two darkGray" id="two" value="2" onClick={()=> handleNumbers('2')}>2</button>
              <button className="padButton three darkGray" id="three" value="3" onClick={()=> handleNumbers('3')}>3</button>
              <button className="padButton equals " id="equals" onClick={()=> total()}>=</button>
              
              <button className="padButton zero darkGray" id="zero" value="0" onClick={()=> handleNumbers('0')}>0</button>
              <button className="padButton decimal darkGray" id="decimal" onClick={()=> handleDecimal()}>.</button>
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

// export default App;
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
