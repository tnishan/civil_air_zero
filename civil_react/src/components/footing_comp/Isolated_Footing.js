import React, { useState } from "react";
import "./Isolated_Footing.css";
import FootingParameters from "./footing_parameter.js";
import Iso_image1 from "./iso_image1.js";
import Iso_image2 from "./iso_image2.js";
import BBS from "./BBS.js";

const Footing = () => {
  const [inputs, setInputs] = useState({
    footing_name :"F1",
    footing_length: "2000",
    footing_breadth: "2000",
    input_depth1: "500",
    input_depth2: "200",
    input_hook: "100",
    concrete_grade: "M20(1:1.5:3)",
    rebar_grade: "Fe500",
    soling_type:"brick_soling",
    pcc_grade: "M10(1:3:6)",
    bar_x_dia : "12",
    bar_y_dia : "12",
    bar_x_spacing:"150",
    bar_y_spacing:"150",
    col_length:"350",
    col_breadth:"350",
       

  });
  const [displayedInputs, setDisplayedInputs] = useState(null);
  const [bbsresult, setBbsResult] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs); // Log the inputs object
    try {
      const response = await fetch('http://127.0.0.1:8000/api/footing/', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      setBbsResult(result);
      console.log(result);
      console.log(inputs); // Log the inputs object
      setDisplayedInputs(result.volume);
    } 
    catch (error) {
      console.log('Error:', error);
    }
  };


  
  return (
    <div className="footing_container">
    <div className="input_body">
      
      {inputs.footing_name === 'F1' ? (
        <div className="image-container1">
          <Iso_image1 inputs={inputs} handleInputChange={handleInputChange} />
        </div>
      ) : inputs.footing_name === 'F2' ? (
        <div className="image-container2">
          <Iso_image2 inputs={inputs} handleInputChange={handleInputChange} />
        </div>
      ) : inputs.footing_name === 'F3' ? (
        <div className="image-container1">
          <Iso_image1 inputs={inputs} handleInputChange={handleInputChange} />
        </div>
      ) : (
        <div>
          Choose Footing Type.
        </div>
      )}




      <div className="parameter_input_container">
        <FootingParameters inputs={inputs} handleInputChange={handleInputChange} />      
      </div>


      <div className="submit_zone">
        <button className="submit_button green" type="submit" onClick={handleSubmit}>
          Create BBS
        </button>
        <button className="submit_button blue" type="submit" onClick={handleSubmit}>
          Create Estimation Sheet
        </button>
      </div>

      <div className="show_data">
      {displayedInputs && (
        <div>
          <pre>Volume : {JSON.stringify(displayedInputs, null, 2)}</pre>
          {/* <pre>h1 : {JSON.stringify(displayedInputs, null, 2)}</pre> */}
          
        </div>
      )}
      </div>
    </div> 

    <div className="bbs_body">
      <BBS data={bbsresult} handleInputChange={handleInputChange} />             
    </div>
  

    </div>
  );
};

export default Footing;
