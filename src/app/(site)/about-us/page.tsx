 
"use client";

import Image from "next/image";
import {
    BadgeCheck,
    Heart,
    Headphones,
    ShieldCheck,
    MapPin,
    Sparkles,
    Star,
    Users,
} from "lucide-react";

export default function AboutUs() {
    return (
        <main className="w-full overflow-hidden bg-[#F5FBFA]">
            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative w-full">
                <div className="relative h-[360px] w-full sm:h-[400px] md:h-[440px] lg:h-[470px]">
                    <Image
                        src="/images/blog-Banner.png"
                        alt="Beautiful travel destination"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            z-10
                            bg-linear-to-tr
                            from-black/50
                            via-black/20
                            via-30%
                            to-transparent
                        "
                    />

                    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 md:px-10 lg:px-12">
                        <div className="max-w-[650px] text-white">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2FC2B0] sm:text-sm">
                                About Holiday Turtle
                            </p>

                            <h1 className="mt-1 text-4xl font-black leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
                                More Than Just Tour Packages
                            </h1>

                            <p className="mt-2 text-2xl font-semibold italic text-[#2FC2B0] sm:text-3xl md:text-4xl lg:text-5xl">
                                We Create Memories
                            </p>

                            <p className="mt-4 max-w-[570px] text-xs leading-relaxed text-white/90 sm:text-sm md:text-base lg:text-lg">
                                We feel every journey should be more than a
                                destination. From unforgettable experiences
                                across India to exciting international
                                getaways, we help you discover, explore, and
                                create memories that last a lifetime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OUR STORY
            ===================================================== */}
            <section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
                    {/* Text */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Our Story
                        </p>

                        <h2 className="mt-2 max-w-[600px] text-3xl font-black leading-tight text-[#00383B] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
                            Making Every Journey
                            <br />
                            More Memorable
                        </h2>

                        <div className="mt-5 max-w-[600px] space-y-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 md:text-lg">
                            <p>
                                Holiday Turtle is a platform created with a
                                simple belief—to make every journey a story
                                worth remembering. To bring this idea to every
                                Indian and international traveller, we aim to
                                present incredible destinations across India
                                and around the world.
                            </p>

                            <p>
                                We believe travel should be inspiring,
                                enjoyable, and easy to plan. That's why what
                                started as a passion is shaping up to be a
                                medium that helps travelers find domestic and
                                international tour packages that suit their
                                interests, preferences and plans.
                            </p>

                            <p className="font-semibold italic text-[#00383B]">
                                “From India to the world, let every journey
                                tell a story.”
                            </p>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-[1.25fr_0.75fr] gap-3 sm:gap-4">
                        <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[390px] md:h-[430px] lg:h-[450px]">
                            <Image
                                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                alt="Traveler exploring a beautiful destination"
                                fill
                                sizes="(max-width: 768px) 60vw, 45vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col gap-3 sm:gap-4">
                            <div className="relative h-[145px] overflow-hidden rounded-xl sm:h-[188px] md:h-[210px] lg:h-[215px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                    alt="Beautiful tropical beach"
                                    fill
                                    sizes="(max-width: 768px) 40vw, 25vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="relative flex-1 overflow-hidden rounded-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
                                    alt="Beautiful Indian heritage destination"
                                    fill
                                    sizes="(max-width: 768px) 40vw, 25vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                WHY CHOOSE US
            ===================================================== */}
            <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Why Choose Us
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-[#00383B] sm:text-4xl md:text-5xl">
                            Your Trusted Tour Partner
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base md:text-lg">
                            We make travel simple, seamless, and memorable—with
                            thoughtfully planned journeys.
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
                        {/* 1 */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <BadgeCheck className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Great Value, Every Journey
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Thoughtfully priced trips without compromising
                                your experience.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Headphones className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Travel Support, Anytime
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                From planning to arrival, we’re here when you
                                need us.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Sparkles className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Trips Worth Taking
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Carefully selected destinations, stays, and
                                experiences.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <ShieldCheck className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Travel With Confidence
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Your booking details are handled with care and
                                security.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="text-center sm:col-span-2 md:col-span-1">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Users className="size-6" />
                            </div>

                            <h3 className="mt-3 text-sm font-bold text-[#00383B] sm:text-base">
                                Memories Made Together
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                                Join travelers discovering new places and
                                making stories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OUR VALUES
            ===================================================== */}
            <section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2FC2B0] sm:text-xs">
                            Our Values
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-[#00383B] sm:text-4xl md:text-5xl">
                            What Shapes Every Journey
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-neutral-500 sm:text-base md:text-lg">
                            We value planning trips, selecting experiences,
                            and supporting travelers—from the first search to
                            the journey home.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* 1 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7">
                            <div className="flex size-12 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Sparkles className="size-5" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-[#00383B]">
                                Thoughtful Planning
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-neutral-500">
                                We focus on the details that turn a trip into
                                a smooth, memorable experience.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7">
                            <div className="flex size-12 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Heart className="size-5" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-[#00383B]">
                                Travelers at the Heart
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-neutral-500">
                                We listen to what travelers need and make
                                every journey easier to plan.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7">
                            <div className="flex size-12 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <MapPin className="size-5" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-[#00383B]">
                                Respect for Every Destination
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-neutral-500">
                                We encourage responsible travel that respects
                                local communities, cultures, and places.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7">
                            <div className="flex size-12 items-center justify-center rounded-full bg-[#E8F8F5] text-[#168A91]">
                                <Sparkles className="size-5" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-[#00383B]">
                                Better Ways to Travel
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-neutral-500">
                                We keep improving how travelers discover,
                                plan, and experience their holidays.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="h-4 sm:h-6" />
        </main>
    );
}
 
