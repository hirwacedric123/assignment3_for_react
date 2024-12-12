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
            <h2>22. Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}                     style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>Increment Count</button>
            <ItemList items={items} />
        </div>
    );
}

export default CounterWithMemoList;
