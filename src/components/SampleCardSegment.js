import React from 'react';
import { CardGroup } from 'react-bootstrap';
import SampleCard from './SampleCard';

function SampleCardSegment(props, id) {
  return (
    <>
      <h2>{props.title}</h2>

      <CardGroup>
        <SampleCard SampleCard={props} key={id} />
      </CardGroup>
    </>
  );
}

export default SampleCardSegment;
