import React from 'react';
// import './highlightDefinition.css';
import { FaBook } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import ArticleContent from './block-contents/ArticleSerializer';

function HighlightDefinition({ blockContent, id }) {
  return (
    <Alert variant="dark" key={id} className="text-dark">
      <Alert.Heading>
        <FaBook /> Definition
      </Alert.Heading>
      <ArticleContent blocks={blockContent} />
    </Alert>
  );
}

export default HighlightDefinition;
