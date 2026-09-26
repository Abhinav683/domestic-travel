"use client";

import { useEffect, useState } from "react";
import { Clock3, CalendarDays, Plane } from "lucide-react";

const STORAGE_KEY = "wander-india-early-bird-sale-end";

function useEarlyBirdCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 18,
        minutes: 42,
        seconds: 16,
    });

    useEffect(() => {
        let savedEndTime = localStorage.getItem(STORAGE_KEY);

        if (!savedEndTime) {
            const duration =
                2 * 24 * 60 * 60 * 1000 +
                18 * 60 * 60 * 1000 +
                42 * 60 * 1000 +
                16 * 1000;

            savedEndTime = String(Date.now() + duration);

            localStorage.setItem(
                STORAGE_KEY,
                savedEndTime
            );
        }

        const endTime = Number(savedEndTime);

        const updateCountdown = () => {
            const difference = endTime - Date.now();

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
                    difference / (1000 * 60 * 60 * 24)
                ),
                hours: Math.floor(
                    (difference / (1000 * 60 * 60)) % 24
                ),
                minutes: Math.floor(
                    (difference / (1000 * 60)) % 60
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

        return () => clearInterval(interval);
    }, []);

    return timeLeft;
}

function CountdownBox({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div className="flex h-[42px] w-[42px] flex-col items-center justify-center rounded-[8px] bg-[#FFF7D8] sm:h-[48px] sm:w-[48px]">
            <span className="text-[15px] font-bold leading-[16px] text-[#005D65] sm:text-[17px]">
                {String(value).padStart(2, "0")}
            </span>

            <span className="mt-[2px] text-[6px] font-medium leading-[7px] text-[#5D8587] sm:text-[7px]">
                {label}
            </span>
        </div>
    );
}

export default function EarlyBirdOfferBanner() {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = useEarlyBirdCountdown();

    return (
        <section className="w-full px-2 py-2 sm:px-4">
            <div className="relative mx-auto flex min-h-[74px] w-full max-w-full items-center overflow-hidden rounded-[14px] border border-[#E6F2F1] bg-[#F5FCFB] px-3 shadow-[0_2px_12px_rgba(0,70,75,0.04)] sm:min-h-[82px] sm:px-5 lg:h-[86px] lg:px-7">
                {/* LEFT */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
                    <Clock3 className="h-[27px] w-[27px] text-[#00636A] sm:h-[32px] sm:w-[32px]" />

                    <div className="hidden flex-col leading-none sm:flex">
                        <span className="text-[10px] font-semibold text-[#00636A] lg:text-[11px]">
                            Limited Time Offer
                        </span>

                        <span className="mt-[4px] text-[9px] font-medium text-[#5E8587] lg:text-[10px]">
                            Ends in
                        </span>
                    </div>
                </div>

                {/* COUNTDOWN */}
                <div className="ml-3 flex shrink-0 items-center gap-1 sm:ml-5 sm:gap-2">
                    <CountdownBox
                        value={days}
                        label="Days"
                    />

                    <CountdownBox
                        value={hours}
                        label="Hours"
                    />

                    <CountdownBox
                        value={minutes}
                        label="Mins"
                    />

                    <CountdownBox
                        value={seconds}
                        label="Secs"
                    />
                </div>

                {/* DIVIDER */}
                <div className="mx-3 hidden h-[45px] w-px bg-[#DCEBEA] sm:mx-5 sm:block lg:mx-7" />

                {/* SAVINGS */}
                <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="relative flex h-[57px] w-[145px] rotate-[-2deg] items-center justify-center sm:h-[62px] sm:w-[165px]">
                        {/* Yellow brush shape */}
                        <div className="absolute inset-[4px] rounded-[45%] bg-[#FFC928] [clip-path:polygon(4%_20%,12%_8%,24%_12%,36%_3%,50%_9%,63%_3%,76%_10%,90%_5%,98%_19%,94%_35%,100%_50%,94%_65%,98%_82%,88%_91%,76%_87%,63%_98%,50%_91%,36%_98%,24%_90%,11%_94%,4%_81%,8%_65%,0%_50%,7%_35%)]" />

                        <div className="relative z-10 text-center">
                            <p className="text-[7px] font-semibold leading-[8px] text-[#00606A] sm:text-[8px]">
                                Save Up To
                            </p>

                            <p className="text-[22px] font-bold leading-[23px] text-[#005D65] sm:text-[25px]">
                                ₹5,000
                            </p>

                            <p className="text-[6px] leading-[7px] text-[#00606A] sm:text-[7px]">
                                per person
                            </p>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="mx-3 hidden h-[45px] w-px bg-[#DCEBEA] lg:mx-5 sm:block" />

                {/* BOOK BEFORE */}
                <div className="hidden shrink-0 items-center gap-3 md:flex">
                    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#E7F5F3]">
                        <CalendarDays className="h-[19px] w-[19px] text-[#00636A]" />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[9px] font-semibold leading-[11px] text-[#00606A] lg:text-[10px]">
                            Book Before
                        </span>

                        <span className="mt-[2px] text-[11px] font-bold leading-[13px] text-[#005D65] lg:text-[12px]">
                            30 Sep 2025
                        </span>

                        <span className="mt-[2px] text-[7px] leading-[8px] text-[#6D9294] lg:text-[8px]">
                            (Limited Period)
                        </span>
                    </div>
                </div>

                {/* PLANE */}
                <div className="ml-auto hidden rotate-[-15deg] lg:block">
                    <Plane className="h-[28px] w-[28px] text-[#00636A]" />
                </div>
            </div>
        </section>
    );
}