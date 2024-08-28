import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState(" ");
  const [count, setCount] = useState(0);

  async function generateAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count => count + 1 )
  }
  useEffect(()=>{
    generateAdvice()
  }, [])
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={generateAdvice}> Get Advice </button>
      <Message count={count} />
    </div>
  );
};

const Message = ({count}) => {
  return <> <hr />
  <p>Today You have Recieved Total {count} Advices</p>
  </>;
};

export default App;
