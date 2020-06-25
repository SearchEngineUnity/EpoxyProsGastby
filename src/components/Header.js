import React from 'react';
import { Container } from 'react-bootstrap';
import Img from 'gatsby-image';

const style = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
};

const Header = ({ assets }) => {
  return (
    <Container>
      <div className="row justify-content-between">
        {assets.map((img) => {
          return (
            <div className="col-md-4" key={img.asset.id}>
              <Img
                fluid={img.asset.fluid}
                alt="The City Painters"
                style={style}
                fadeIn={false}
                loading="eager"
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Header;
