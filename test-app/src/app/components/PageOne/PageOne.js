
import React, { useState } from "react";
import "./PageOne.css";

const PageOne = ({ onButtonClick }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: ""
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
    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);
    // Store JSON data in local storage
    localStorage.setItem("formData", jsonData);
    // Trigger button click handler to navigate to next page
    onButtonClick("pagetwo");
  };

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <form name="form1" className="measure" onSubmit={handleSubmit}>
        <h2>Welcome! First things first...</h2>
        <p style={{ color: "#C0C0C0" }}>You can always change them later.</p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db text-white lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Full Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="fullName"
              id="full-name"
              size="30"
              placeholder="Rahul"
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
              className="db text-white lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              Email Address
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="displayName"
              id="display-name"
              placeholder="rahulsinghhh2312@gmail.com"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
            }}
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
