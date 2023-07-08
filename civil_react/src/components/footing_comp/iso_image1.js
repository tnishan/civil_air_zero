import React from 'react';
import './iso_image1.css';

function Iso_image1({ inputs, handleInputChange }) {
  return (
    <div className="image-container">
        <div className="grid-overlay"></div> {/* Added grid-overlay div */}
        <img 
          src="/footing.png" 
          alt="Your Diagram" 
        />
        <input
          name="input_depth_t1_1" type="text" className="input-field"  id="input_depth_t1_1" 
          onChange={handleInputChange} value={inputs.input_depth1}
        />
        <input
          name="input_depth_t1_2"  type="text"  className="input-field"  id="input_depth_t1_2"
          onChange={handleInputChange} value={inputs.input_depth2}
        />
        <input
          name="footing_length_t1" type="text"  className="input-field"  id="footing_length_t1"
          onChange={handleInputChange} value={inputs.footing_length}
        />
         <input
          name="col_length_t1" type="text"  className="input-field"  id="col_length_t1"
          onChange={handleInputChange} value={inputs.col_length}
        />
        {/* <input
          name="bar_x_spacing" type="text"  className="input-field"  id="bar_x_spacing"
          onChange={handleInputChange} value={inputs.bar_x_spacing}
        /> */}

        
      </div>

);
}

export default Iso_image1;
