// import React from "react"
// import { Container } from 'react-bootstrap'

// import Layout from "../containers/layout"
// import Article from '../components/article'
// import CallToAction from '../components/callToAction'
// import CompanyInfo from '../components/companyInfo'
// import ContactFormTypeA from '../components/contactFormTypeA'
// import FeatureCollection from '../components/featureCollection'
// import Hero from '../components/hero'
// import Banner from '../components/pageHeader'
// import PartnerCollection from '../components/partnersCollection'
// import TestimonialCollection from '../components/testimonialsCollection'
// import SEO from '../components/seo'

// import {
//   mapArticleToProps,
//   mapBannerHeaderToProps,
//   mapCallToActionToProps,
//   mapContactUsToProps,
//   mapFeatureCollectionToProps,
//   mapFormToProps,
//   mapHeroToProps,
//   mapPartnerCollectionToProps,
//   mapTestimonialCollectionToProps,
//   mapSEOToProps
// } from '../lib/mapToProps'

// export const query = graphql`
// query PageTemplate($slug: String) {
//   page: sanityPage(slug: {current: {eq: $slug}}) {
//     title
//     slug {
//       current
//     }
//     metaTags {
//       title
//       description
//       openGraph {
//         title
//         description
//         image {
//           asset {
//             url
//           }
//         }
//       }
//     }
//     sections {
//       ... on SanityArticle {
//         width
//         title
//         _type
//         _key
//         _rawBody(resolveReferences: {maxDepth: 10})
//         column
//       }
//       ... on SanityBannerHeader {
//         _type
//         _key
//         image {
//           image {
//             asset {
//               originalFilename
//               fluid {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//         title
//       }
//       ... on SanityCallToAction {
//         _type
//         _key
//         buttons {
//           _key
//           title
//           size
//           borderRadius
//           internalLink {
//             _type
//             reference {
//               ... on SanityPage {
//                 slug {
//                   current
//                 }
//               }
//               ... on SanityPost {
//                 slug {
//                   current
//                 }
//               }
//             }
//           }
//           externalLink {
//             blank
//             href
//             title
//             _type
//           }
//         }
//         intro
//         title
//         width
//         image {
//           image {
//              asset {
//               originalFilename
//               fluid {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//           alt
//           caption
//         }
//       }
//       ... on SanityFeatureCollection {
//         _type
//         _key
//         title
//         width
//         features {
//           _key
//           description
//           icon
//           title
//           width
//         }
//         borderRadius
//         layout
//       }
//       ... on SanityHero {
//         _type
//         _key
//         tagLine
//         title
//         image {
//           alt
//           image {
//             asset {
//               url
//               originalFilename
//               fluid {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//         ctaButtons {
//           _key
//           borderRadius
//           externalLink {
//             blank
//             href
//             title
//             _type
//           }
//           internalLink {
//             _type
//             reference {
//               ... on SanityPage {
//                 slug {
//                   current
//                 }
//               }
//               ... on SanityPost {
//                 slug {
//                   current
//                 }
//               }
//             }
//           }
//           size
//           title
//         }
//       }
//       ... on SanitySharedSection {
//         _type
//         referencedSection {
//           ... on SanitySharedArticle {
//             _type
//             _id
//             _rawBody(resolveReferences: {maxDepth: 10})
//             title
//             width
//             column
//           }
//           ... on SanitySharedBannerHeader {
//             _type
//             _id
//             image {
//               image {
//                 asset {
//                   originalFilename
//                   fluid {
//                     ...GatsbySanityImageFluid
//                   }
//                 }
//               }
//             }
//             title
//           }
//           ... on SanitySharedCallToAction {
//             _type
//             _id
//             width
//             title
//             intro
//             image {
//               alt
//               caption
//               image {
//                 asset {
//                   originalFilename
//                   fluid {
//                     ...GatsbySanityImageFluid
//                   }
//                 }
//               }
//             }
//             buttons {
//               _key
//               borderRadius
//               size
//               title
//               externalLink {
//                 blank
//                 href
//                 title
//                 _type
//               }
//               internalLink {
//                 _type
//                 reference {
//                   ... on SanityPage {
//                     slug {
//                       current
//                     }
//                   }
//                   ... on SanityPost {
//                     slug {
//                       current
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           ... on SanitySharedFeatureCollection {
//             width
//             _id
//             title
//             _type
//             features {
//               description
//               icon
//               title
//               width
//               _key
//             }
//             borderRadius
//             layout
//           }
//           ... on SanitySharedHero {
//             tagLine
//             _id
//             title
//             _type
//             image {
//               alt
//               image {
//                 asset {
//                   originalFilename
//                   url
//                   fluid {
//                     ...GatsbySanityImageFluid
//                   }
//                 }
//               }
//             }
//             ctaButtons {
//               _key
//               borderRadius
//               externalLink {
//                 blank
//                 href
//                 title
//               }
//               internalLink {
//                 reference {
//                   ... on SanityPage {
//                     slug {
//                       current
//                     }
//                   }
//                   ... on SanityPost {
//                     slug {
//                       current
//                     }
//                   }
//                 }
//               }
//               size
//               title
//             }
//           }
//           ... on SanitySharedTestimonialCollection {
//             width
//             title
//             _type
//             _id
//             testimonials {
//               name
//               width
//               image {
//                 asset {
//                   _id
//                   originalFilename
//                   fluid {
//                     ...GatsbySanityImageFluid
//                   }
//                 }
//               }
//               _key
//               description
//             }
//             layout
//           }
//           ... on SanitySharedForm {
//             action
//             _type
//             _id
//             title
//             width
//             button {
//               borderRadius
//               title
//               size
//             }
//             formFields {
//               name
//               placeholder
//               required
//               title
//               inputType
//               fieldType
//               _key
//             }
//           }
//           ... on SanitySharedPartnerCollection {
//             _type
//             _id
//             partners {
//               image {
//                 asset {
//                   originalFilename
//                   url
//                   fluid {
//                     ...GatsbySanityImageFluid
//                   }
//                 }
//               }
//               _key
//               title
//               webUrl
//             }
//             title
//             width
//           }
//           ... on SanitySharedContactUs {
//             email
//             _id
//             _type
//             address
//             title
//             width
//             number
//           }
//         }
//       }
//       ... on SanityTestimonialCollection {
//         _type
//         _key
//         title
//         width
//         testimonials {
//           width
//           name
//           description
//           _key
//           image {
//             asset {
//               _id
//               originalFilename
//               fluid {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//         layout
//       }
//       ... on SanityPartnerCollection {
//         _type
//         _key
//         title
//         width
//         partners {
//           webUrl
//           title
//           _key
//           image {
//             asset {
//               url
//               originalFilename
//               fluid (maxHeight: 40) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//       }
//       ... on SanityForm {
//         _type
//         _key
//         action
//         formFields {
//           _key
//           inputType
//           name
//           placeholder
//           required
//           title
//           fieldType
//         }
//         title
//         width
//         button {
//           borderRadius
//           title
//           size
//         }
//       }
//       ... on SanityContactUs {
//         email
//         _key
//         _type
//         number
//         title
//         width
//         address
//       }
//     }
//   }
//   site {
//     siteMetadata {
//       siteUrl
//     }
//   }
// }
// `;

// export default ({ data }) => {
//   let type = 'page'
//   let SEOdiv = data.page.metaTags ? (<SEO {...mapSEOToProps(data.page.metaTags, data.page.slug.current, data.site.siteMetadata.siteUrl, type)} />) : null

//     return (
//       <Layout>
//           {SEOdiv}
//           {data.page.sections.map(section => {
//             const{ _type} = section
//             if (_type === 'bannerHeader') {
//               return (
//                 <Banner id={section._key} {...mapBannerHeaderToProps(section)} />
//               )
//             } else {
//               return null
//             }
//           })}
//           <Container>
//             <div className="row">
//               {data.page.sections.map(section => {
//                 const { _type, referencedSection = {} } = section
//                 switch (_type) {
//                   case "article":
//                     return (
//                       // <div>This is the Article section</div>
//                       <Article id={section._key} {...mapArticleToProps(section)}/>
//                     )

//                   case "bannerHeader":
//                     return (
//                       // this header has been rendered above so this will return null
//                       null
//                     )

//                   case "callToAction":
//                     return (
//                       // <div>This is the CTA section</div>
//                       <CallToAction id={section._key} {...mapCallToActionToProps(section)}/>
//                     )

//                   case "contactUs":
//                     return (
//                       // <div>This is the Contact Us section</div>
//                       <CompanyInfo id={section._key} {...mapContactUsToProps(section)} />
//                     )

//                   case "featureCollection":
//                     return (
//                       // <div>This is the Feature Collection section</div>
//                       <FeatureCollection id={section._key} {...mapFeatureCollectionToProps(section)} />
//                     )

//                   case "form":
//                     return (
//                       // <div>This is the Form section</div>
//                       <ContactFormTypeA id={section._key} {...mapFormToProps(section)} />
//                     )

//                   case "hero":
//                     return (
//                       // <div>This is the Hero section</div>
//                       <Hero id={section._key} {...mapHeroToProps(section)} />
//                     )

//                   case "partnerCollection":
//                     return (
//                       // <div>This is the Partner Collection section</div>
//                       <PartnerCollection id={section._key} {...mapPartnerCollectionToProps(section)} />
//                     )

//                   case "testimonialCollection":
//                     return (
//                       // <div>This is the Testimonial Collection section</div>
//                       <TestimonialCollection id={section._key} {...mapTestimonialCollectionToProps(section)} />
//                     )

//                   case "sharedSection":
//                     switch(referencedSection._type){
//                       case "shared.article":
//                         return (
//                           // <div>This is the Shared Article section</div>
//                           <Article id={section._id} {...mapArticleToProps(referencedSection)}/>
//                           )

//                       case "shared.bannerHeader":
//                         return (
//                           // <div>This is the Shared CTA section</div>
//                           null
//                         )

//                       case "shared.callToAction":
//                         return (
//                           // <div>This is the Shared CTA section</div>
//                           <CallToAction id={section._id} {...mapCallToActionToProps(referencedSection)}/>
//                         )

//                       case "shared.contactUs":
//                         return (
//                           // <div>This is the Shared Contact Us section</div>
//                           <CompanyInfo id={section._id} {...mapContactUsToProps(referencedSection)} />
//                           )

//                       case "shared.featureCollection":
//                         return (
//                           // <div>This is the Shared Feature Collection section</div>
//                           <FeatureCollection id={section._id} {...mapFeatureCollectionToProps(referencedSection)} />
//                         )

//                       case "shared.form":
//                         return (
//                           // <div>This is the Shared Form section</div>
//                           <ContactFormTypeA id={section._id} {...mapFormToProps(referencedSection)} />
//                         )

//                       case "shared.hero":
//                         return (
//                           // <div>This is the Shared Hero section</div>
//                           <Hero id={section._id} {...mapHeroToProps(referencedSection)} />
//                         )

//                       case "shared.partnerCollection":
//                         return (
//                           // <div>This is the Shared Partner Collection section</div>
//                           <PartnerCollection id={section._id} {...mapPartnerCollectionToProps(referencedSection)} />
//                         )

//                       case "shared.testimonialCollection":
//                         return (
//                           // <div>This is the Shared Testimonial Collection section</div>
//                           <TestimonialCollection id={section._id} {...mapTestimonialCollectionToProps(referencedSection)} />
//                         )

//                       default:
//                         return (
//                           <div>Shared Section Still under development</div>
//                         )

//                     }
//                   default:
//                     return (
//                       <div>Still under development</div>
//                     )

//                 }
//               })}
//             </div>
//           </Container>
//         </Layout>
//     )
// }
