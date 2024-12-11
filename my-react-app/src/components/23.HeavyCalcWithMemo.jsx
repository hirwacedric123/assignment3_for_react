import React, { useState, memo } from "react";

const HeavyCalculation = memo(({ num }) => {
    console.log("HeavyCalculation rendered");
    const result = Array(1000000)
        .fill(0)
        .reduce((acc, _, i) => acc + (i % num), 0);
    return <p>Calculation Result: {result}</p>;
});

function HeavyCalcWithMemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="component-card">
            <h1>23. Heavy Calculation</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <HeavyCalculation num={5} />
        </div>
    );
}

export default HeavyCalcWithMemo;
