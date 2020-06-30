import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';

<<<<<<< Updated upstream
function SampleCard({
  id,
  title,
  date,
  //  excerpt,
  image,
  // imageFilename,
  imageAlt,
  url,
}) {
=======
// function SampleCard({
//   id,
//   title,
//   date,
//   //  excerpt,
//   image,
//   // imageFilename,
//   imageAlt,
//   url,
// }) {
//   // internet/external links as an anchor, title , description, imge without text, button
//   return (
//     <div className="col-4" key={id}>
//       <Link to={url}>
//         <Card>
//           <Img fluid={image} alt={imageAlt} />
//           <Card.Body>
//             <Card.Title>{title}</Card.Title>
//             <Card.Subtitle>{date.slice(0, 10).replace(/-/g, '/')}</Card.Subtitle>
//             {/* <Block blocks={excerpt}/> */}
//           </Card.Body>
//         </Card>
//       </Link>
//     </div>
//   );
// }

// export default SampleCard;

function SampleCard() {
>>>>>>> Stashed changes
  // internet/external links as an anchor, title , description, imge without text, button
  return (
    <div className="col-4, thiscard">
      <Link to="/">
        <Card>
<<<<<<< Updated upstream
          <Img fluid={image} alt={imageAlt} />
=======
>>>>>>> Stashed changes
          <Card.Body>
            <Card.Title>This is a card</Card.Title>
            <Card.Subtitle>This is its subtitle</Card.Subtitle>
            {/* <Block blocks={excerpt}/> */}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default SampleCard;
