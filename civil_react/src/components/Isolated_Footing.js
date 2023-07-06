import React, { useEffect, useState } from 'react';
import CanvasComponent from './Canvas';
import Footing from './footing_comp/Isolated_Footing';


function Isolated_Footing() {
  return (
    <div >  {/* consider adjusting this width if needed */}
      <h2>Isolated Footing</h2>
      <Footing />       
    </div>
  );
}

export default Isolated_Footing;
