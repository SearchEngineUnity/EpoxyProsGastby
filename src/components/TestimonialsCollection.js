import React from 'react';
import TestimonialsTypeA from './TestimonialsTypeA';
import TestimonialsTypeB from './TestimonialsTypeB';

function TestimonialsCollection({ title, layout, colWidth, testimonials, id }) {
  const componentTypeSwitch = () => {
    switch (layout) {
      case 'A - With Image':
        return <TestimonialsTypeA testimonials={testimonials} key={id} />;

      case 'B - Without Image':
        return <TestimonialsTypeB testimonials={testimonials} key={id} />;

      default:
        return <h3>Undefined Testimonial Type</h3>;
    }
  };

  return (
    <div className={colWidth}>
      <h3>{title}</h3>
      <div className="row">{componentTypeSwitch(layout)}</div>
    </div>
  );
}

export default TestimonialsCollection;
