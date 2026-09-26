"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "wander-india-early-bird-sale-end";

export function useEarlyBirdCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 18,
        minutes: 42,
        seconds: 16,
    });

    useEffect(() => {
        let savedEndTime =
            localStorage.getItem(STORAGE_KEY);

        if (!savedEndTime) {
            const duration =
                2 * 24 * 60 * 60 * 1000 +
                18 * 60 * 60 * 1000 +
                42 * 60 * 1000 +
                16 * 1000;

            savedEndTime = String(
                Date.now() + duration
            );

            localStorage.setItem(
                STORAGE_KEY,
                savedEndTime
            );
        }

        const endTime = Number(savedEndTime);

        const updateCountdown = () => {
            const difference =
                endTime - Date.now();

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });

                return;
            }

            setTimeLeft({
                days: Math.floor(
                    difference /
                        (1000 * 60 * 60 * 24)
                ),
                hours: Math.floor(
                    (difference /
                        (1000 * 60 * 60)) %
                        24
                ),
                minutes: Math.floor(
                    (difference /
                        (1000 * 60)) %
                        60
                ),
                seconds: Math.floor(
                    (difference / 1000) % 60
                ),
            });
        };

        updateCountdown();

        const interval = setInterval(
            updateCountdown,
            1000
        );

        return () =>
            clearInterval(interval);
    }, []);

    return timeLeft;
}