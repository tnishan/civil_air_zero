import React from 'react';
import './iso_image2.css';

function Iso_image2({ inputs, handleInputChange }) {
  return (
    <div className="image-container">
        <div className="grid-overlay"></div> {/* Added grid-overlay div */}
        <img 
          src="/type_2.png" 
          alt="Your Diagram" 
        />
      <input
        name="input_depth_t2_1" type="text" className="input-field"  id="input_depth_t2_1" 
        onChange={handleInputChange} value={inputs.input_depth1}
      />
      {/* <input
        name="input_depth_t2_2"  type="text"  className="input-field"  id="input_depth_t2_2"
        onChange={handleInputChange} value={inputs.input_depth2}
      /> */}
      <input
        name="footing_length_t2" type="text"  className="input-field"  id="footing_length_t2"
        onChange={handleInputChange} value={inputs.footing_length}
      />
       <input
        name="col_length_t2" type="text"  className="input-field"  id="col_length_t2"
        onChange={handleInputChange} value={inputs.col_length}
      />
       
      </div>

);
}

export default Iso_image2;
