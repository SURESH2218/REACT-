import React, { useState } from "react";
import './usestate.css'
const Usestate1 = () => {
    const [show,showData] = useState(false);
    const changeEvent =() =>{
        showData(!show)
    }
    
  return <div className="main-div">
    <button onClick={changeEvent}>{show ? "hide" : 'show'}</button>
    {/* {show && (
    <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita enim nihil tempore quam sint quae. Facere ullam consequuntur praesentium reprehenderit.</div>
    )} */}
    {
        show ? <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, id, necessitatibus, tempora illum voluptates sunt aliquam sint iste minus dolorem consectetur voluptatem doloremque fugiat quos nemo eos ab numquam! Provident.</div> : <h3>DATA IS HIDDEN</h3>
    }
  </div>;
};

export default Usestate1;
