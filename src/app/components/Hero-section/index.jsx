import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <section className="relative h-96">
                <Image
                    src="/hero-section/p1.webp"
                    alt="Model wearing abaya"
                    layout="fill"
                    objectFit="cover" // Ensures the image covers the container
                    priority // Ensures the image loads faster
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Discover Your Perfect Abaya
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Try it virtually and shop our exclusive collection
                    </p>
                    <div className="space-x-4">
                        <Link href="/shop">
                            <span className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition">
                                Shop Now
                            </span>
                        </Link>
                        <Link href="/try-on">
                            <span className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-md font-medium transition">
                                Try Virtually
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;