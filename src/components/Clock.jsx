'use client'

import { useState, useEffect } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const day = currentTime.getDate();
    const month = currentTime.getMonth();
    const year = currentTime.getFullYear();

    const timeString = currentTime.toLocaleTimeString();
    const dateString = `${day} ${monthNames[month]} ${year}`;

    return (
        <div>
            <p id="time">{timeString}</p>
            <p id="date">{dateString}</p>
        </div>
    );
};
