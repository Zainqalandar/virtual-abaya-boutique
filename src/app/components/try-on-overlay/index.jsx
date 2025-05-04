'use client';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const TryOnOverlay = () => {
	const webcamRef = useRef(null);
	const [overlaySrc, setOverlaySrc] = useState('/Virtual-Try-On/hijab-looks.png'); // transparent PNG
	return (
		<>
			<div className="relative w-full h-[500px]">
				<Webcam
					ref={webcamRef}
					audio={false}
					mirrored
					className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
				/>
				<img
					src={overlaySrc}
					alt="Abaya Overlay"
					className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
				/>
			</div>
		</>
	);
};

export default TryOnOverlay;
