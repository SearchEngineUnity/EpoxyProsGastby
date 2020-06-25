import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import CtaButton from './CtaButton';

function Hero({ tagLine, title, imageURL, ctaButtons, id }) {
  const style = {
    background: `url("${imageURL}") no-repeat center center #ffffff`,
    backgroundSize: 'cover',
  };

  return (
    <div className="col-12" key={id}>
      <Jumbotron fluid style={style}>
        <h1>{title}</h1>
        <p>{tagLine}</p>
        <CtaButton buttons={ctaButtons} />
      </Jumbotron>
    </div>
  );
}

export default Hero;
