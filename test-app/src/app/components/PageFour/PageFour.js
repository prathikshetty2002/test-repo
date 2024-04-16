import React from "react";


const PageFour = () => {
    return (
      <div
        className="mw5  w-100 md:pa2-ns text-black mt5 dib"
        style={{ maxWidth: "30%", maxHeight:'30%' }}
      >
        <img
         style={{mixBlendBode: "multiply"}}
         src="/tick.jpg"
          className="h3 w3 mx-auto "
          title="success icon"
          alt="tick-icon"
        />
        <div className="center"><h3 className="">Congratulations, </h3></div>
        <p className="text-white">
          You have completed the onboarding, you can start using our app
        </p>
        <input
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
          type="submit"
          value="Lessgoo"
        />
      </div>
    );
}

export default PageFour;