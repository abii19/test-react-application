import React, { useEffect, useState } from "react";

const HooksPage = () => {
  const [count, setCount] = useState(10);

  const handleClick = () => {
    setCount((count) => count + 1); //11
    // setCount(count + 1); //11
  };
  console.log(count);

  useEffect(() => {
    setCount(15);
  }, []);

  return (
    <div className="mb-40">
      <h1 className="font-medium text-5xl mb-4">useState</h1>
      <p>The value of count is {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
};

export default HooksPage;
