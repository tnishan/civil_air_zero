import React, { useState } from "react";
import "./Isolated_Footing.css";


const Footing = () => {
  const [inputs, setInputs] = useState({
    footing_length: "",
    footing_breadth: "",
    input_depth1: "",
    input_depth2: "",
    input_hook: "",
    concrete_grade: "",
    rebar_grade: "",
    soling_type:"",
    pcc_grade: "",

  });
  const [displayedInputs, setDisplayedInputs] = useState(null);

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
      <div className="image-container">
        <div className="grid-overlay"></div> {/* Added grid-overlay div */}
        <img 
          src="/footing.png" 
          alt="Your Diagram" 
        />
        <input
          name="input_depth1" type="text" className="input-field"  id="input_depth1" 
          onChange={handleInputChange}
        />
        <input
          name="input_depth2"  type="text"  className="input-field"  id="input_depth2"
          onChange={handleInputChange}
        />
        <input
          name="footing_length" type="text"  className="input-field"  id="input_length"
          onChange={handleInputChange}
        />
      </div>
      <div className="parameter_input_container">
        <p>MORE FOOTING PARAMETERS</p>

        <div className="input_group">
          <label htmlFor="input_ppc_grade">Concrete Grade:</label>
          <select 
            name="concrete_grade" 
            id="input_concrete_grade" 
            onChange={handleInputChange}
          >
            <option value="">Select a grade...</option>
            <option value="M20(1:1.5:3)">M20 (1:4:8)</option>
            <option value="M25(1:1:2)">M25 (1:3:6)</option>
            <option value="M30">M30 </option>
          </select>
        </div>

        <div className="input_group">
          <label htmlFor="input_rebar_grade">Rebar Grade:</label>
          <select 
            name="rebar_grade" 
            id="input_rebar_grade" 
            onChange={handleInputChange}
          >
            <option value="">Select a grade...</option>
            <option value="Fe415">Fe415</option>
            <option value="Fe500">Fe500</option>
            <option value="Fe550">Fe550 </option>
          </select>
        </div>

        
        <div className="input_group">
          <label htmlFor="input_rebar_grade">Footing Breadth:</label>
          <input
            name="footing_breadth" type="number" className="input-space" id="input_footing_breadth" onChange={handleInputChange}
          />
        </div>
        <div className="input_group">
          <label htmlFor="input_soling_type">Soling Type:</label>
          <select 
            name="soling_type" id="input_soling_type" onChange = {handleInputChange}
          >
            <option value="">Select Soling Type</option>
            <option value="brick_soling">Brick Soling</option>
            <option value="stone_soling">Stone Soling</option>
        </select> 
        </div>
        <div className="input_group">
          <label htmlFor="input_pcc_grade">PCC Grade:</label>
          <select 
            name="pcc_grade" 
            id="input_pcc_grade" 
            onChange={handleInputChange}
          >
            <option value="">Select a grade...</option>
            <option value="M5(1:4:8)">M5 (1:4:8)</option>
            <option value="M10(1:3:6)">M10 (1:3:6)</option>
            <option value="M15(1:2:4)">M15 (1:2:4)</option>
          </select>
        </div>

        
      </div>
      <div className="submit_zone">
        <button className="submit_button green" type="submit" onClick={handleSubmit}>
          Create BBS
        </button>
        <button className="submit_button blue" type="submit" onClick={handleSubmit}>
          Create Estimation Sheet
        </button>
        <button className="submit_button blue" type="submit" onClick={handleSubmit}>
          Add to Footing List
        </button>
      </div>

      <div className="show_data">
      {displayedInputs && (
        <div>
          <pre>Volume : {JSON.stringify(displayedInputs, null, 2)}</pre>
        </div>
      )}
      </div>

      
    </div>
  );
};

export default Footing;
