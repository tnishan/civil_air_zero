import React from 'react';
import './BBS.css';

function BBS({ data }) {
  // Check if the data is available. If not, render loading state
  if (!data) {
    return <div>Press "Get BBS" to see BBS</div>; 
  }

  // Convert the bbs_props object into an array
  const bbsPropsArray = Object.entries(data.bbs_props).map(([direction, props], index) => {
    return {
      serial: index + 1,
      barShape: `${direction.charAt(0).toUpperCase() + direction.slice(1)} Direction`,  // Capitalize the direction
      ...props  // Spread the rest of the properties
    };
  });

  // Use the bbsPropsArray to render your table
  return (
    <div className="bbs_body">
      <h2>Bar Bending Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Bar Shape</th>
            <th>Bar Length(m)</th>
            <th>No. of Bars</th>
            <th>Dia. (mm)</th>
            <th>Unit Wt. (kg/m)</th>
            <th>T. Length (m)</th>
            <th>Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
          {bbsPropsArray.map(row => (
            <tr key={row.serial}>
              <td>{row.serial}</td>
              <td>
                <svg width="200" height="80" viewBox="0 0 200 80">
                  <path 
                    d={`
                      M 30,30
                      v ${20} 
                      h ${120} 
                      v -${20}
                    `} 
                    stroke="black" 
                    fill="transparent" 
                    strokeWidth="2"
                  />
                  <text x="8" y="45" fill="black" fontSize="12">
                    {row.v1}
                  </text>
                  <text x="152" y="45" fill="black" fontSize="12">
                    {row.v2}
                  </text>
                  <text x="75" y="45" fill="black" fontSize="12">
                    {row.h1}
                  </text>
                </svg>
              </td>
              <td>{row.bar_length}</td>
              <td>{row.no_bars}</td>
              <td>{row.bar_dia}</td>
              <td>{row.bar_unit_wt}</td>
              <td>{row.total_length}</td>
              <td>{row.total_wt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BBS;
