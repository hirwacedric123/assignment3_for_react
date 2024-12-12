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
            <h2>23. Heavy Calculation</h2>
            <p>Count: {count}</p>
            <button style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }} onClick={() => setCount(count + 1)}>Increment Count</button>
            <HeavyCalculation num={5} />
        </div>
    );
}

export default HeavyCalcWithMemo;
