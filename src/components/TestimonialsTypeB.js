import React from 'react';

function TestimonialsTypeB({ testimonials }) {
  const testimonialsList = testimonials.map((testimonial) => {
    return (
      <div className={testimonial.colWidth} key={testimonial.id}>
        <p>{testimonial.description}</p>
        <h5>{testimonial.name}</h5>
      </div>
    );
  });

  return testimonialsList;
}

export default TestimonialsTypeB;
