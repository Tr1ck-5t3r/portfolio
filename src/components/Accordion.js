import "../globalStyles/theme.css";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function getImageCert({ index, certificates }) {
  return certificates[index].image.src.childrenImageSharp[0].gatsbyImageData;
}

function Accordion({ certificates }) {
  return (
    <div className="accordion__container">
      <div className="accordion">
        <div className="accordion__items">
          {certificates.map((certificate, index) => (
            <div key={index} className="accordion__item">
              <div className="accordion__image">
                <GatsbyImage
                  image={getImageCert({ index, certificates })}
                  alt={certificate.image.alt}
                />
              </div>
              <div className="accordion__item__content">
                <h2>{certificate.label}</h2>
                <div className="accordion__contents">
                  <p>
                    {certificate.dates.start} - {certificate.dates.end}
                  </p>
                  <p>{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
