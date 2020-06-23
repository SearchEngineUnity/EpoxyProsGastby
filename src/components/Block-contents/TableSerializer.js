import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';
import Illustration from './Illustration';

const serializers = {
  types: {
    block({ children }) {
      return <div>{children}</div>;
    },
    illustration({ node }) {
      return <Illustration illustration={node} />;
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {}, _type } = mark.reference;
      const href = _type === 'page' ? `/${slug.current}` : `/${_type}/${slug.current}`;
      return <Link to={href}>{children}</Link>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
