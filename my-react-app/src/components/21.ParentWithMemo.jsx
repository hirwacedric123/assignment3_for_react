import React, { useState, memo } from "react";

const ChildComponent = memo(({ message }) => {
    console.log("Child rendered");
    return <p>{message}</p>;
});

function ParentWithMemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="component-card">
            <h2>21. Parent Component</h2>
            <ChildComponent message="This prop is memoized!" />
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default ParentWithMemo;

