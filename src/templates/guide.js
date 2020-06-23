import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../containers/layout';
import GuideHero from '../components/guideHero';
import GuideBody from '../components/block-contents/GuideSerializer';
import ToC from '../components/tableOfContent';
import SocialSharing from '../components/socialSharing';
import SEO from '../components/seo';

import { mapGuideHeroToProps, mapGuideSEOToProps } from '../lib/mapToProps';

export const query = graphql`
  query guideTemplate($slug: String) {
    guide: sanityGuide(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      twitter {
        description
        title
      }
      noindex
      nofollow
      canonical
      id
      heroImage {
        mainImage {
          alt
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
      h1
      facebook {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      author {
        name
      }
      _rawBody(resolveReferences: { maxDepth: 12 })
      toc {
        _key
        header
        title
        type
      }
      description
      displayDate
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ({ data }) => {
  const type = 'guide';
  const url = `${data.site.siteMetadata.siteUrl}/guide/${data.guide.slug.current}`;

  return (
    // Need code here for if banner return banner
    
    <Layout>
      <SEO {...mapGuideSEOToProps(data.guide, data.site.siteMetadata.siteUrl, type)} />
      <GuideHero {...mapGuideHeroToProps(data.guide)} />
      <Container fluid>
        <div className="row">
          <div className="col-md-2">
            <ToC toc={data.guide.toc} />
          </div>
          <article className="col-md-8">
            <GuideBody blocks={data.guide._rawBody} />
          </article>
          <div className="col-md-2">
            <SocialSharing url={url} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};
