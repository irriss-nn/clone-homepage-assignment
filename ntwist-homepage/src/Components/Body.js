// Description: This file contains the Body component. It is used to display the body of the page.
import React from 'react';

// Create a functional component named 'Body'
const Body = ({ titleLines, paragraphs, imageSrc, reversed }) => {
  return (
    // Set up a row, with reverse layout on medium screens if 'reversed' is true
    <div className={`row items-center ${reversed ? "flex-md-row-reverse" : ""}`} style={{ marginTop: "4rem", marginBottom: "4rem" }}>

      {/* Left or Right Content */}
      <div className={`col-10 col-lg-6 ms-auto me-auto  ${reversed ? "ps-2" : "pe-2"}`}>
        
        {/* Display the title lines */}
        <h1 className="font-weight-bold text-danger">
          {titleLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>

        {/* Display the paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="fs-6 my-3" style={{ textAlign: "justify", fontWeight: 400, lineHeight: 1.5, marginBottom: "2rem" }}>
            {Array.isArray(paragraph)
              ? paragraph.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)
              : paragraph}
          </p>
        ))}

        {/* Read More Button */}
        <div className="closer-button">
          <button className="btn btn-danger">Read More</button>
        </div>
      </div>

      {/* Right or Left Content */}
      <div className={`col-10 col-lg-6 ms-auto me-auto ${reversed ? "pe-2" : "ps-2"}`}>
        {/* Display the image */}
        <img src={imageSrc} style={{ maxWidth: "100%" }} alt={`${titleLines.join(' ')} illustration`} />
      </div>
    </div>
  );
};


export default Body;
