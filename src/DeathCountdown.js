import React, { useState, useEffect } from 'react';

function DeathCountdown({ end, colleagueName }) {
    const calculateTimeLeft = () => {
        const difference = (new Date(end)) - (new Date());
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, i) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={i}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="App">
            <header className="App-header">
                <span className="App-logo">☠️</span>
                <p>{timerComponents.length ? <>{colleagueName} you are dead to us in<br /> {timerComponents}</> : <span>{colleagueName} you're dead to us now. Good luck.</span>}</p>
            </header>
        </div>
    );
}

export default DeathCountdown;