import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../containers/layout';
import Banner from '../components/pageHeader';
import GuideCard from '../components/guideCard';
import Seo from '../components/Seo';

import { mapBannerHeaderToProps, mapGuideCardToProps, mapSeoToProps } from '../lib/mapToProps'; // eslint-disable-line

export const query = graphql`
  query GuideTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      metaTags {
        title
        description
        openGraph {
          title
          description
          image {
            asset {
              url
            }
          }
        }
      }
      segments {
        ... on SanityBannerHeader {
          _type
          _key
          title
          image {
            asset {
              url
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
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
  // const type ='page'
  // let SEOdiv = data.page.metaTags ? (<SEO {...mapSEOToProps(data.page.metaTags, data.page.slug.current, data.site.siteMetadata.siteUrl, type)} />) : null

  return (
    <Layout>
      {/* {SEOdiv} */}
      {data.page.segments.map((segment) => {
        const { _type } = segment;
        if (_type === 'bannerHeader') {
          return <Banner id={segment._key} {...mapBannerHeaderToProps(segment)} />; // eslint-disable-line
        }
        return null;
      })}
      <Container>
        <div className="row">
          {data.guides.nodes.map((guide) => {
            return <GuideCard {...mapGuideCardToProps(guide)} />; // eslint-disable-line
          })}
        </div>
      </Container>
    </Layout>
  );
};
