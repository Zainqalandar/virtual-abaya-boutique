import React from 'react'

const MissionVision = () => {
  return (
    <>
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower women with confidence and choice by providing an interactive online platform where they can explore, try-on, and purchase premium abayas tailored to their style.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be the world leader in virtual fashion retail, seamlessly blending technology and tradition to redefine the shopping experience for modest wear.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default MissionVision