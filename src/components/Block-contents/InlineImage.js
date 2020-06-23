import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function InlineImage({ image, alt }) {
  const fluidProps = getFluidGatsbyImage(image._id, {}, sanityConfig);
  return (
    <div style={{ marginBottom: '16px' }}>
      <picture className="text-center">
        <Img fluid={fluidProps} alt={alt} />
      </picture>
    </div>
  );
}

export default InlineImage;
