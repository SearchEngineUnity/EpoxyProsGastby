import React from 'react';
import Img from 'gatsby-image';

function TestimonialsTypeA({ testimonials }) {
  const testimonialsList = testimonials.map((testimonial) => {
    return (
      <div className={testimonial.colWidth} key={testimonial.id}>
        <Img fluid={testimonial.image} alt={testimonial.name} />
        <p>{testimonial.description}</p>
        <h5>{testimonial.name}</h5>
      </div>
    );
  });

  return testimonialsList;
}

export default TestimonialsTypeA;
