import React from "react";
import "../../utilities/css/appcss.css";
import RotatingImage from "../../utilities/RotatingImage";
import BottomContainer from "../../utilities/BottomContainer";
import DocumentationContainer from "../../utilities/DocumentationContainer";
import CreateProductsForm from "./forms/CreateProductsForm";
import logger from "../../utilities/Logs/logger"; // Import your logger module here

function CreateProductsPage() {
  // Log the component rendering with timestamp
  logger.info(`[${new Date().toLocaleTimeString()}] CreateProductsPage component is rendering.`);

  // Define the list of components to render
  const componentsToRender = [CreateProductsForm];
  const helpComponentsToRender = ["CreateProductsPage"];

  return (
    <div className="page-container">
      <h1 className="title">Add New Product</h1>

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

export default CreateProductsPage;
