import React from 'react';

function Hero() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        {/* Image Container with hover scale and fadeIn animation */}
        <div className="transform transition duration-500 hover:scale-105 fadeIn">
          <img
            src="https://img.freepik.com/premium-photo/portrait-group-smiling-doctors_53419-4179.jpg?semt=ais_hybrid"
            className="rounded w-full"
            alt="Group of Doctors"
          />
        </div>
        {/* Text Container with a slight animation delay for a staggered effect */}
        <div className="fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl transition duration-500 ease-in-out transform hover:scale-105">
              Effortless Doctor <span className='text-purple-800'>Appointment</span> Booking at Your <span className='text-purple-800'>Fingertips</span>
            </h2>
            <p className="mt-4 text-gray-700 transition duration-500 ease-in-out transform hover:translate-x-2">
              Experience a seamless scheduling process with our innovative appointment booking system.
              Connect with trusted healthcare professionals, select a time that suits you, and manage your appointments with ease.
              Your health is our priority.
            </p>
          </div>
        </div>
      </div>
      {/* Custom CSS for fadeIn animation */}
      <style>{`
        .fadeIn {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
