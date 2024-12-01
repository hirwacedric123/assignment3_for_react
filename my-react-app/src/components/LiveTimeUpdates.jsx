import React, { useState, useEffect, memo } from "react";

const StaticUI = memo(() => {
    console.log("StaticUI rendered");
    return <h1>25. Static UI Part</h1>;
});

function LiveTimeUpdates() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="component-card">
            <StaticUI />
            <h2>Current Time: {time}</h2>
        </div>
    );
}

export default LiveTimeUpdates;
