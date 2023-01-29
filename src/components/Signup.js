import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"


const Signup = () => {
  
  return (   
  <div className="columns  ">
    
        <div className= "column">
        
        </div>       
        <div class="buttons is-centered mt-5">
          <a class="button is-warning is-large"><Link to={`items/dashboard`}
                   >
                  
            Search Item</Link></a>
          
           <a class="button is-warning is-large" ><Link to={`items/additems`}>
                   
                  
            Add Items                   </Link></a>
        </div>
        <div className="column">
          
          </div>

            
        
      </div>
    
    
    
  );
};

export default Signup;
