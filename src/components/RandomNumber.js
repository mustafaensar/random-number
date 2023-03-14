import React from "react";

function RandomNumber(){
  
  const [minVal, setMinVal] = React.useState(0);
  const [maxVal, setMaxVal] = React.useState(10);
  const [randomNum, setRandomNumber] = React.useState(5);
  function getRandomNum(){
    if(minVal > maxVal){
      alert("Please enter valid numbers");
    }
    else{
      const arr = []
      for (let index = parseInt(minVal); index <= maxVal; index++){
        arr.push(index);
      }
      setRandomNumber(arr[Math.floor(Math.random()*arr.length)]);
    }
  }

  return(
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number : <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
              type="number"
              value={minVal}
              onChange={e => setMinVal(e.target.value)}
            />
          </div>
          <div>
            <p>Max:</p>
            <input
              type="number"
              value={maxVal}
              onChange={e => setMaxVal(e.target.value)}
            />
          </div>
        </div>
        <button onClick={getRandomNum}>Get Random Number</button>
      </div>
    </div>
  )
}

export default RandomNumber;