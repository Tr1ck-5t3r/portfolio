import "../globalStyles/theme.css";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function getImageCert({ index, awards }) {
  return awards[index].image.src.childrenImageSharp[0].gatsbyImageData;
}

function AwardList({ awards }) {
  return (
    <div className="accordion__container">
      <div className="accordion">
        <div className="accordion__items">
          {awards.map((award, index) => (
            <div key={index} className="accordion__item">
              <div className="accordion__image">
                <GatsbyImage
                  image={getImageCert({ index, awards })}
                  alt={award.image.alt}
                />
              </div>
              <div className="accordion__item__content">
                <h2>{award.label}</h2>
                <div className="accordion__contents">
                  <p>Recieced on: &#160;{award.dates}</p>
                  <p>Venue: &#160; {award.venue}</p>
                  <p>{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AwardList;
