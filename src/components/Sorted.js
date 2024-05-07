import React, { useState, useEffect } from "react";
import "../globalStyles/theme.css";
import Accordion from "./Accordion";

function Sorted({ certificates }) {
  const [originalCertificates, setOriginalCertificates] = useState([]);
  const [sortedCertificates, setSortedCertificates] = useState(certificates);
  const [active, setActive] = useState("date");

  useEffect(() => {
    setOriginalCertificates(certificates);
    setSortedCertificates(certificates);
  }, [certificates]);

  const sortByDate = () => {
    if (active !== "date") {
      setSortedCertificates(originalCertificates);
      setActive("date");
    }
    setSortedCertificates((prevCertificates) =>
      prevCertificates
        .slice()
        .sort((a, b) => new Date(b.dates.end) - new Date(a.dates.end))
    );
  };

  const sortByName = () => {
    setSortedCertificates((prevCertificates) =>
      prevCertificates.slice().sort((a, b) => a.label.localeCompare(b.label))
    );
    setActive("name");
  };

  return (
    <div>
      <div className="sortby__container">
        <div className="sortby">
          <h4>Sort by</h4>
          <button
            className={active === "date" ? "active" : "accordion__button"}
            onClick={sortByDate}
          >
            Date
          </button>
          <button
            className={active === "name" ? "active" : "accordion__button"}
            onClick={sortByName}
          >
            Name
          </button>
        </div>
      </div>

      <Accordion certificates={sortedCertificates} />
    </div>
  );
}

export default Sorted;
