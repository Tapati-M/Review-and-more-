// import React from 'react'
// import { Design } from '../assets'
// const Review = () => {
//   return (
//     <div>
//         <h1 className='text-5xl font-sans font-bold mb-3'>Jyotish Aloy <span className='text-red-600'>Reviews</span></h1>
//         <h5 className='text-amber-700 text-xl font-mono'>Hear about us from our customrs</h5>
//         <img src={Design} alt="Design" className='' />
//        <div className='px-20'>
//        <p className='text-left font-bold text-gray-800 text-lg'>
//             Client Testimonial
//         </p>
//         <p className='text-left'>
//         Jotish Aloy, in India, is recognized as the best astrology website, dedicated to providing astrology consultation to astrology lovers from across the world. We help our customers interact with Vedic astrologers, Tarot readers, Numerologists, Palm readers and experts in all other astrological fields. Our motive is to provide people with the most genuine astrology services, and thus are consistently open to recommendations. In fact, our Astrotalk reviews page helps us well understand the need of the customers and what they think about us and the astrologers on Jotish Aloy.</p>
//        </div>
//     </div>
//   )
// }

// export default Review

import React from "react";
import { Design } from "../assets"; // Assuming Design is the decorative separator image

const ReviewsSection = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-10 md:px-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center font-sans mb-3">
        Jyotish Aloy <span className="text-red-600">Reviews</span>
      </h1>

      {/* Subtitle */}
      <h5 className="text-xl italic text-gray-600 text-center mb-6">
        Hear about us from our customers
      </h5>

      {/* Decorative Separator */}
      <div className="flex justify-center mb-6">
        <img
          src={Design} // Replace with the correct path to your decorative image
          alt="Decorative Separator"
          className="w-24 h-auto"
        />
      </div>

      {/* Content */}
      <div className="text-gray-800 text-sm md:text-base leading-relaxed">
        <h3 className="text-lg font-bold mb-2">Client Testimonials</h3>
        <p>
          Jotish Aloy, in India, is recognized as the best astrology website,
          dedicated to providing astrology consultation to astrology lovers from
          across the world. We help our customers interact with Vedic
          astrologers, Tarot readers, Numerologists, Palm readers, and experts
          in all other astrological fields. Our motive is to provide people
          with the most genuine astrology services, and thus are consistently
          open to recommendations. In fact, our Astrotalk reviews page helps us
          well understand the needs of the customers and what they think about
          us and the astrologers on Jotish Aloy.
        </p>
      </div>
    </div>
  );
};

export default ReviewsSection;
