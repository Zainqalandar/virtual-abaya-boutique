'use client';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function TryOnAdjust() {
  const [userImage, setUserImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUserImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Upload & Adjust Your Photo under Abaya</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-4"
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
  );
}