import React, { useEffect, useRef, useState } from "react";

import arrowDown from "./Images/arrowDown.svg";

const CollapsableComponent = ({heading,data}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);
  return (
    <>
      <div className=" comapnyInfoSections">
        <h2 className="collpsePart" onClick={toggleCollapsible}>
        {heading}
          <img src={arrowDown} />
        </h2>
        <div
          className="collaapsible-content collapsePartDesign"
          style={{ height }}
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: data }}
        >

          
        </div>
      </div>
    </>
  );
};

export default CollapsableComponent;
