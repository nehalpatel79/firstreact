import React, { useEffect, useState } from "react";

function Timerfun() {
  // 1.
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timeRef = setInterval(tick, 1000);

    return () => {
      clearInterval(timeRef);
    };
  }, []);

  // 2.
  return <div>{time.toLocaleTimeString()}</div>;
}

export default Timerfun;
