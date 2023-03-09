import React from "react";
import data from './data'

const App =() => {
    
    return (
      <main className="main-container">
        <ul className="comments-container">
            {
                data.map((eachObj)=>{
                    const {id,name,email,body } =eachObj;
                    return <li key={id} className="comment">
                        <div className="comments-header">
                            <h3 className="email">{email}</h3>
                            <h3 className="line-clamp"> {name} </h3>
                        </div>
                        <p className="message"> {body} </p>

                    </li>
                })
            }
        </ul>
      </main>
    )
}


export default App;