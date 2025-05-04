'use client';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const UploadAndTryOn = () => {
	const webcamRef = useRef(null);
	const [imageUploaded, setImageUploaded] = useState(null);

	const handleUpload = (e) => {
		const file = URL.createObjectURL(e.target.files[0]);
		setImageUploaded(file);
	};
	return (
		<>
			<div className="relative w-full h-[600px] flex items-center justify-center bg-gray-100">
				{!imageUploaded ? (
					<Webcam
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						className="rounded-lg"
						videoConstraints={{
							width: 640,
							height: 480,
							facingMode: 'user',
						}}
					/>
				) : (
					<img
						src={imageUploaded}
						className="w-[300px] h-auto object-cover"
					/>
				)}

				{/* Abaya Overlay */}
				<img
					src="/Virtual-Try-On/hijab-looks.png"
					alt="abaya"
					className="absolute top-[80px] w-[300px] h-auto"
					style={{
						zIndex: 10,
						pointerEvents: 'none',
					}}
				/>

				<div className="absolute bottom-4 flex gap-4">
					<input
						type="file"
						accept="image/*"
						onChange={handleUpload}
					/>
				</div>
			</div>
		</>
	);
};

export default UploadAndTryOn;
