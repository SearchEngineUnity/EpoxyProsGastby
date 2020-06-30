import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function GuideCard({ title, date, image, imageFilename, imageAlt, url }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '32px' }}>
      <Link to={url}>
<<<<<<< Updated upstream
        <Card className="h-100">
          <Img fluid={image} alt={imageAlt} title={imageFilename} />
=======
        <Card>
          {image ? (
            <Img fluid={image} alt={imageAlt} />
          ) : (
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
          )}
>>>>>>> Stashed changes
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{date.slice(0, 10).replace(/-/g, '/')}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

GuideCard.defaultProps = {
  image: {
    aspectRatio: 1.5,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACaElEQVQoz9XQe0vTcRTH8e+mkJe2vMxhmubM1IipqOSNDGTJMC0tHXmZQZtz6bylJqESqag53EyZ17SokCmWWWomm5VZz8AehY/Bd7+ZUD2EDhwOnD9e58MRdXV12Gw2nM4x1jdW+PK5lS1vLL2efDTeWYTXLnUKya4L9OcMsOU/z464iltEUSHqUQUsk5o2QU11ExZLHeI/AC0WbE02HD5w/W/wCvHHoOwYHMj9Ay7JojFIYMQ/oAVRbzbR3NjAmARubq7w9Qg8Q4/nMnGeGQkcQXi0JLqS6M+WQLkP1EkJT/9OeMIHjmOsaaS+3oSoaW7D1N5Jv2Mc95tFtj61SWAyfTt6tDvzKHacKL3ZpE9nMFQwzNapBbzBxSydTKA6yEZM2DJpGdOUG7qoudOGKHFPcOPVU6pHndh6njBsb+HlYhn2t1YqV+fQr7m49sGM6bmZ6ZZpPt5y47n5kLVyE4MGJ8byDcr0y1zPnaQkaxzR+rODhh/3Ke61kp5lpCD/Nlarke6+drpHR3jkcvJ4aog+Zx+OQQfPhmZ47ZhkyTWDe2GZF1PvsRtn6IztpkXZgeia0NI8qKWwOJXokBQilRfRF5Zgt9tZcrt5t7rK3OwcZpOZoqIiSstKqayq4q7JRIP0+1brPTp0pTyIzqQrVIvIy4njUmYsmhg1Af5BBAcoMVQY2P22y8HBwVFvb2+j1+tRKpQoFArCQkOJUKmIiFATqVaTFB1FluYsefFxiITzSWg05wgPVyGTywgMCqS2tpb9/X18dXh4yN73PXQ6HXK5HCEEMpkMPz+/o+nbhUgH4uLjSUhM4hdsvOFb7lByegAAAABJRU5ErkJggg==',
    sizes: '(max-width: 220px) 100vw, 220px',
    src:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png',
    srcSet:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?w=110&h=62&fit=crop 110w, https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png 220w',
    srcSetWebp:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?w=110&h=62&fit=crop&fm=webp 110w, https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?fm=webp 220w',
    srcWebp:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?fm=webp',
  },
  imageAlt: 'image alt',
  imageFilename: 'image',
};

GuideCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
  }),
  imageAlt: PropTypes.string,
  imageFilename: PropTypes.string,
};

export default GuideCard;
