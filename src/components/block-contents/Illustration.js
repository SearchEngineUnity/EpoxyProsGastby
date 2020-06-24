import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration }) {
  const fluidProps = getFluidGatsbyImage(illustration.image.asset._id, {}, sanityConfig);

  if (illustration.description) {
    return (
      <div style={{ marginBottom: '16px' }}>
        <figure className="text-center">
          <Img fluid={fluidProps} alt={illustration.alt} />
          <figcaption>{illustration.description}</figcaption>
        </figure>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: '16px' }}>
      <picture className="text-center">
        <Img fluid={fluidProps} alt={illustration.alt} />
      </picture>
    </div>
  );
}

export default Illustration;
