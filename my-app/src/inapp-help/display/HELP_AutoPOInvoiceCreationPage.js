import React from "react";
import "../../modules/utilities/css/appcss.css";

const HELP_AutoPOInvoiceCreationPage = () => (
  <div>
    <h2 className="subheading">Auto Create Purchase Order Invoice</h2>
    <p className="indented-paragraph">
      The `Auto Create Purchase Order Invoice` form allows users to automatically create invoices based on selected purchase orders. The invoices are generated by considering company-specific configurations, including tax setups, accounting distribution, and other criteria defined at the company level.
    </p>

    <h3 className="subheading">Purchase Order Numbers</h3>
    <p className="indented-paragraph">
      The form allows you to enter a comma-separated list of Purchase Order (PO) numbers. These are the POs for which you want to generate invoices.
      You can either:
      - Enter specific PO numbers (e.g., 12345, 67890) or
      - Leave the field empty to create invoices for all available purchase orders, with a confirmation prompt for validation.
    </p>

    <h3 className="subheading">Company Configuration and Setup</h3>
    <p className="indented-paragraph">
      The process considers various company-specific configurations to generate accurate invoices. For example:
      - Account type distribution: The system checks if the debit and credit amounts for each account type are equal as defined in the company configuration.
      - The configuration setup is pulled from the `COMPANY_CONFIG` settings, which are unique to each company or department.
    </p>

    <h3 className="subheading">Invoice Creation Workflow</h3>
    <p className="indented-paragraph">
      The workflow works as follows:
      - After entering the PO numbers, the form fetches the related purchase order headers from the backend.
      - It filters out POs based on the configurations and status of the POs, ensuring only valid POs are processed.
      - Then, for each valid PO, a POST request is made to create a purchase invoice, while grouping them by company ID for easier processing.
    </p>

    <h3 className="subheading">Error and Success Messages</h3>
    <p className="indented-paragraph">
      - **Success Message**: Displays a message summarizing the outcome of the invoice creation process. For instance, if invoices are created for all selected POs, a message will confirm how many invoices were created.
      - **Error Message**: If any error occurs during the fetching of PO headers or the invoice creation process, an error message will be displayed. The system checks for mismatches in debit and credit distributions, and other configuration issues.
    </p>

    <h3 className="subheading">Permissions</h3>
    <p className="indented-paragraph">
      The form checks whether the user has the required permissions to create invoices. If the user lacks the necessary permissions, they will be informed with a message stating that they cannot create purchase order invoices.
    </p>

    <h3 className="subheading">Key Functionality Breakdown</h3>
    <ul className="indented-paragraph">
      <li><strong>PO Numbers:</strong> A text input field where users enter one or more purchase order numbers separated by commas.</li>
      <li><strong>Form Submission:</strong> On submitting the form, the system processes the POs and attempts to create invoices for each valid purchase order.</li>
      <li><strong>Backend Integration:</strong> The system communicates with the backend API to fetch purchase order headers, validate configurations, and create invoices.</li>
      <li><strong>Invoice Generation:</strong> Depending on the configuration, purchase invoices will be created. The process also checks if debit and credit distribution percentages match in the company configuration.</li>
      <li><strong>Response Handling:</strong> The system collects responses for each company and provides a summary message for successful or unsuccessful invoice creation.</li>
    </ul>

    <h3 className="subheading">Additional Notes</h3>
    <p className="indented-paragraph">
      The invoice generation process is governed by the configurations in the `COMPANY_CONFIG` setup. If the debit and credit distribution percentages do not match, invoices will not be created. Additionally, the system ensures that only purchase orders with the "autoinvoice" status are processed.
    </p>
  </div>
);

export default HELP_AutoPOInvoiceCreationPage;
