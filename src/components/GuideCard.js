import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function GuideCard({
  id,
  title,
  date,
  //  excerpt,
  image,
  // imageFilename,
  imageAlt,
  url,
}) {
  return (
    <div className="col-4" key={id}>
      <Link to={url}>
        <Card>
          <Img fluid={image} alt={imageAlt} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{date.slice(0, 10).replace(/-/g, '/')}</Card.Subtitle>
            {/* <Block blocks={excerpt}/> */}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default GuideCard;
