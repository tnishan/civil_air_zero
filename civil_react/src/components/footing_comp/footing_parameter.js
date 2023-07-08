import React from 'react';
import './footing_parameter.css';

function FootingParameters({ inputs, handleInputChange }) {
  return (

        <div className="parameter_input_container">
            <p>MORE FOOTING PARAMETERS</p>

            {/* <div className="input_group">
                <label htmlFor="footing_name">Footing Name:</label>
                <input
                    name="footing_name" type="text" className="input-space" id="input_footing_name" onChange={handleInputChange}
                    value={inputs.footing_name} 
                />
            </div> */}

            <div className="input_group">
                <label htmlFor="input_footing_name">Footing Type:</label>
                <select 
                    name="footing_name" 
                    id="input_footing_name" 
                    onChange={handleInputChange}
                    value={inputs.footing_name} 
                >
                    <option value="">Footing Type </option>
                    <option value="F1">Chamfered</option>
                    <option value="F2">Flat</option>
                    <option value="F3">Steep</option>
                </select>
            </div>

            <div className="input_group">
                <label htmlFor="input_ppc_grade">Concrete Grade:</label>
                <select 
                    name="concrete_grade" 
                    id="input_concrete_grade" 
                    onChange={handleInputChange}
                    value={inputs.concrete_grade} 
                >
                    <option value="">Select a grade...</option>
                    <option value="M20(1:1.5:3)">M20 (1:1.5:3)</option>
                    <option value="M25(1:1:2)">M25 (1:1:2)</option>
                    <option value="M30">M30 </option>
                </select>
            </div>

            <div className="input_group">
                <label htmlFor="input_rebar_grade">Rebar Grade:</label>
                <select 
                    name="rebar_grade" 
                    id="input_rebar_grade" 
                    onChange={handleInputChange} value={inputs.rebar_grade}  
                >
                    <option value="">Select a grade...</option>
                    <option value="Fe415">Fe415</option>
                    <option value="Fe500">Fe500</option>
                    <option value="Fe550">Fe550 </option>
                </select>
            </div>


            <div className="input_group">
                <label htmlFor="input_footing_breadth">Footing Breadth:</label>
                <input
                    name="footing_breadth" type="number" className="input-space" id="input_footing_breadth" onChange={handleInputChange}
                    value={inputs.footing_breadth} 
                />
            </div>

            <div className="input_group">
                <label htmlFor="bar_x_dia">Bar Dia (mm):</label>
                <select 
                    name="bar_x_dia" 
                    id="bar_x_dia" 
                    onChange={handleInputChange} value={inputs.bar_x_dia}  
                >
                    <option value="">Select bar size...</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20 </option>
                    <option value="25">25 </option>
                    
                </select>
            </div>

            <div className="input_group">
                <label htmlFor="bar_x_spacing">Bar Spacing (mm):</label>
                <input
                    name="bar_x_spacing" type="number" className="input-space" id="bar_x_spacing" onChange={handleInputChange}
                    value={inputs.bar_x_spacing} 
                />
            </div>



            <div className="input_group">
                <label htmlFor="input_soling_type">Soling Type:</label>
                <select 
                    name="soling_type" id="input_soling_type" onChange = {handleInputChange} 
                    value={inputs.soling_type}  
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
                    onChange={handleInputChange}  value={inputs.pcc_grade}  
                >
                    <option value="">Select a grade...</option>
                    <option value="M5(1:4:8)">M5 (1:4:8)</option>
                    <option value="M10(1:3:6)">M10 (1:3:6)</option>
                    <option value="M15(1:2:4)">M15 (1:2:4)</option>
                </select>
            </div>


        </div>

);
}

export default FootingParameters;