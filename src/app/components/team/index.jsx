import React from 'react';

const Team = () => {
	const team = [
		{
			name: 'Areeba Khan',
			role: 'CEO & Founder',
			photo: '/logo/aisha.jpg',
		},
		{ name: 'Sara Ali', role: 'CTO', photo: '/logo/fatima.jpg' },
		{
			name: 'Nadia Ahmed',
			role: 'Head of Design',
			photo: '/logo/zara.jpg',
		},
		{
			name: 'Zainab Qureshi',
			role: 'Marketing Lead',
			photo: '/logo/aisha.jpg',
		},
	];
	return (
		<>
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
						Meet the Team
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{team.map((member) => (
							<div key={member.name} className="text-center">
								<img
									src={member.photo}
									alt={member.name}
									className="mx-auto mb-4 w-32 h-32 rounded-full object-cover shadow-md"
								/>
								<h4 className="text-xl font-semibold text-gray-800">
									{member.name}
								</h4>
								<p className="text-gray-600">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
