import React from './node_modules/react';
import Img from './node_modules/gatsby-image';
import { getFluidGatsbyImage } from './node_modules/gatsby-source-sanity';

const sanityConfig = { projectId: 'udntb7sx', dataset: 'production' };

function Illustration({ image }) {
  const fluidProps = getFluidGatsbyImage(image.image.asset._id, {}, sanityConfig);

  if (image.description) {
    return (
      <div style={{ marginBottom: '16px' }}>
        <figure className="text-center">
          <Img fluid={fluidProps} alt={image.alt} />
          <figcaption>{image.description}</figcaption>
        </figure>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: '16px' }}>
      <picture className="text-center">
        <Img fluid={fluidProps} alt={image.alt} />
      </picture>
    </div>
  );
}

export default Illustration;
