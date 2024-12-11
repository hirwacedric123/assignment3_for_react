import React, { useState, memo } from "react";

const ItemList = memo(({ items }) => {
    console.log("ItemList rendered");
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
});

function CounterWithMemoList() {
    const [count, setCount] = useState(0);
    const items = ["Item 1", "Item 2", "Item 3"];

    return (
        <div className="component-card">
            <h1>22. Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <ItemList items={items} />
        </div>
    );
}

export default CounterWithMemoList;
