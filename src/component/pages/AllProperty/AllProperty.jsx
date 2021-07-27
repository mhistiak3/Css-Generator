import React from "react";
import { Link } from "react-router-dom";
import { PropertyBanner, PropertyContainer } from "./AllProperty.style";
import data from "./Data";

const AllProperty = () => {
  return (
    <PropertyBanner>
      <h2>Select Your Favourite Property</h2>
      <PropertyContainer>
        {data.map((d) => (
          <span key={d.id}>
            <Link to={`property/${d.property}`}>{d.property}</Link>
          </span>
        ))}
      </PropertyContainer>
    </PropertyBanner>
  );
};

export default AllProperty;
