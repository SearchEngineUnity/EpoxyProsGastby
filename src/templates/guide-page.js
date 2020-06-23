import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../containers/layout';
import GuideCard from '../components/guideCard';
import Seo from '../components/Seo';

import { mapGuideCardToProps, mapSeoToProps } from '../lib/mapToProps'; // eslint-disable-line

export const query = graphql`
  query GuideTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
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
  // const type ='page'
  // let SEOdiv = data.page.metaTags ? (<SEO {...mapSEOToProps(data.page.metaTags, data.page.slug.current, data.site.siteMetadata.siteUrl, type)} />) : null

  return (
    <Layout>
      {/* {SEOdiv} */}
      <Container>
        <div className="row">
          {data.guides.nodes.map((guide) => {
            return <GuideCard {...mapGuideCardToProps(guide)} />;
          })}
        </div>
      </Container>
    </Layout>
  );
};
