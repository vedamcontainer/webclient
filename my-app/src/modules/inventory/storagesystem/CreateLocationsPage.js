import React from "react";
import "../../utilities/css/appcss.css";
import RotatingImage from "../../utilities/RotatingImage";
import BottomContainer from "../../utilities/BottomContainer";
import DocumentationContainer from "../../utilities/DocumentationContainer";
import CreateLocationsForm from "./forms/CreateLocationsForm";
import logger from "../../utilities/Logs/logger"; // Import your logger module here

function CreateLocationsPage() {
  // Log the component rendering with timestamp
  logger.info(`[${new Date().toLocaleTimeString()}] CreateLocationsForm component is rendering.`);

  // Define the list of components to render
  const componentsToRender = [CreateLocationsForm];
  const helpComponentsToRender = ["CreateLocationsPage"];

  return (
    <div className="page-container">
      <h1 className="title">Setup Locations</h1>

      <div className="parent-container">
        {componentsToRender.map((Component, index) => (
          <React.Fragment key={index}>
            <Component />
          </React.Fragment>
        ))}
        <DocumentationContainer componentNames={helpComponentsToRender} />
      </div>
      <RotatingImage />
      <BottomContainer />
    </div>
  );
}

export default CreateLocationsPage;
