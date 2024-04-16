
import React, { useState } from "react";
import "./PageTwo.css";

const PageTwo = ({ onButtonClick }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
  
    // Retrieve existing JSON data from local storage
    const existingData = localStorage.getItem("formData");
    let existingFormData = {};
    if (existingData) {
      existingFormData = JSON.parse(existingData);
    }
  
    // Get form data from the state
    const formData = {
      workspaceName: target.workspaceName.value,
      workspaceUrl: target.workspaceUrl.value
    };
  
    // Merge existing data with new form data
    const updatedFormData = { ...existingFormData, ...formData };
  
    // Convert merged data to JSON
    const jsonData = JSON.stringify(updatedFormData);
  
    // Store merged JSON data in local storage
    localStorage.setItem("formData", jsonData);
  
    // Trigger button click handler to navigate to the next page
    onButtonClick("pagethree");
  };
  
  
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <form name="form2" className="measure" onSubmit={handleSubmit}>
        <h2>Let's set up a home for all your work</h2>
        <p style={{ color: "#C0C0C0" }}>
          You can always create another workspace later.
        </p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="left db lh-copy text-white f6 mb1"
              htmlFor="workspace-name"
              style={{ textAlign: "left" }}
            >
              Address 
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="workspaceName"
              id="workspace-name"
              size="30"
              placeholder="Eden"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={handleInputChange}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1 text-white"
              htmlFor="workspace-url"
              style={{ textAlign: "left" }}
            >
             Number
              <span className="ml1" style={{ color: "#C0C0C0" }}>
                {" "}
                (optional)
              </span>
            </label>
            <div className="center urlButton br2 mt1">
              
              <input
                className="f6 ph3 pv2 dib br2 black w-100"
                type="text"
                name="workspaceUrl"
                id="workspace-url"
                placeholder="9321441951"
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                onChange={handleInputChange}
              />
            </div>
          </div>                
        </fieldset>
        <div className="">
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
    </main>
  );
};

export default PageTwo;
