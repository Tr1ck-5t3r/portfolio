import React from "react";
import { Page, Seo, Animation, Section } from "gatsby-theme-portfolio-minimal";
import "../globalStyles/theme.css";
import { useStaticQuery, graphql } from "gatsby";
import Sorted from "../components/Sorted";

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      certificatesJson {
        certificates {
          image {
            src {
              childrenImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  width: 300
                  placeholder: BLURRED
                  height: 300
                )
              }
            }
            alt
          }
          dates {
            end
            start
          }
          description
          label
        }
      }
    }
  `);
  const certificates = data.certificatesJson.certificates;

  return (
    <>
      <Seo title="Tarun R G portfolio" />
      <Page>
        <Animation type="fadeUp">
          <Section heading="Certificates">
            <Sorted certificates={certificates} />
          </Section>
        </Animation>
      </Page>
    </>
  );
}
