'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';

const VirtualTryOnPromo = () => {
    const [userImage, setUserImage] = useState(null);
    const [showTryOn, setShowTryOn] = useState(false);
    const fileInputRef = useRef(null); // Reference to the file input

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) setUserImage(URL.createObjectURL(file));
    };

    const handleTryNowClick = () => {
        setShowTryOn(true);
        fileInputRef.current.click(); // Trigger file input dialog
    };

    return (
        <>
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src="/Virtual-Try-On/hijab-looks.webp"
                            alt="Virtual Try-On"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Experience Virtual Try-On
                        </h2>
                        <p className="text-gray-600 mb-6">
                            See how our abayas look on you in real-time with our
                            cutting-edge AR feature. Easy, fun, and accurate.
                        </p>
                        <button
                            onClick={handleTryNowClick}
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition"
                        >
                            Try Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Try-On Section */}
            {showTryOn && (
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                    <h1 className="text-2xl font-semibold mb-4">
                        Upload & Adjust Your Photo under Abaya
                    </h1>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        ref={fileInputRef} // Attach the ref to the input
                        className="hidden" // Hide the input field
                    />

                    <div className="relative w-[300px] h-[400px] bg-white border border-gray-300 overflow-hidden">
                        {/* Draggable & Resizable User Photo with Full Control */}
                        {userImage && (
                            <Rnd
                                default={{ x: 50, y: 50, width: 150, height: 200 }}
                                bounds="parent"
                                lockAspectRatio={false}
                                enableResizing={{
                                    top: true,
                                    right: true,
                                    bottom: true,
                                    left: true,
                                    topRight: true,
                                    bottomRight: true,
                                    bottomLeft: true,
                                    topLeft: true,
                                }}
                                style={{ zIndex: 10 }}
                            >
                                <img
                                    src={userImage}
                                    alt="User"
                                    className="w-full h-full object-cover rounded-lg pointer-events-none"
                                />
                            </Rnd>
                        )}

                        {/* Static Abaya Overlay */}
                        <img
                            src="/Virtual-Try-On/blue-hijab.png"
                            alt="Hijab Overlay"
                            className="absolute inset-0 z-20 w-full h-full object-contain pointer-events-none"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default VirtualTryOnPromo;