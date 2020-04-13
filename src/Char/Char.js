import React from 'react';

const char=(props)=>{
const sytle = {
    display :'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
};

return(
   <div style={sytle} onClick={props.clicked}>
      {props.charater}

   </div>
);
}

export default char;