import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../containers/layout';
import GuideCard from '../components/GuideCard';
import SEO from '../components/Seo';

import { mapGuideCardToProps, mapSeoToProps } from '../lib/mapToProps'; // eslint-disable-line

export const query = graphql`
  query GuideTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
    }
    guides: allSanityGuide {
      nodes {
        id
        h1
        displayDate
        slug {
          current
        }
        excerpt {
          short
        }
        cardImage {
          mainImage {
            alt
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ({ data }) => {
  const type = 'page';

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <Container>
        <div className="row">
          {data.guides.nodes.map((guide) => {
            return <GuideCard key={guide.id} {...mapGuideCardToProps(guide)} />;
          })}
        </div>
      </Container>
    </Layout>
  );
};
