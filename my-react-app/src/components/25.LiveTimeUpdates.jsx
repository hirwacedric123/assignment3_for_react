import React, { useState, useEffect, memo } from "react";

const StaticUI = memo(() => {
    console.log("StaticUI rendered");
    return <h2 >25. Live Time Update</h2>;
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
            <h2 style={{color:"white", marginTop:"70px"}}>Current Time: {time}</h2>
        </div>
    );
}

export default LiveTimeUpdates;
