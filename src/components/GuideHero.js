import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'react-bootstrap';

function GuideHero({ h1, author, displayDate, image }) {
  const style = {
    background: `url("${image}") no-repeat center center #ffffff`,
    backgroundSize: 'cover',
  };

  return (
    <Jumbotron fluid style={style}>
      <Container fluid className="p-0 text-white" style={{ textShadow: '2px 2px gray' }}>
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

GuideHero.propTypes = {
  h1: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  displayDate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GuideHero;
