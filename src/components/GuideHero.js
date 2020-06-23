import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'react-bootstrap';

function GuideHero({ h1, author, displayDate, image }) {
  const style = {
    background: `url("${image}") no-repeat center center #ffffff`,
    backgroundSize: 'cover',
  };

  return (
    <Jumbotron fluid>
      <Container fluid className="p-0">
        <div className="col-8 mx-auto">
          <h1>{h1}</h1>
          <br />
          <p>{author}</p>
          <p>{displayDate.slice(0, 10).replace(/-/g, '/')}</p>
        </div>
      </Container>
    </Jumbotron>
  );
}

PropTypes.guideHero({
  h1: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  displayDate: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
});

export default GuideHero;
