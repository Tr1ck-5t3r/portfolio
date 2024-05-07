import React from "react";
import { Page, Seo, Animation, Section } from "gatsby-theme-portfolio-minimal";
import "../globalStyles/theme.css";
import { useStaticQuery, graphql } from "gatsby";
import AwardList from "../components/AwardList";

export default function AwardsPage() {
  const data = useStaticQuery(graphql`
    query {
      awardsJson {
        awards {
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
          dates
          description
          label
          venue
        }
      }
    }
  `);
  const awards = data.awardsJson.awards;

  return (
    <>
      <Seo title="Tarun R G portfolio" />
      <Page>
        <Animation type="fadeUp">
          <Section heading="Awards">
            <AwardList awards={awards} />
          </Section>
        </Animation>
      </Page>
    </>
  );
}
