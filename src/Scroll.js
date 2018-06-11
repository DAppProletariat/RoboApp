import React from 'react';


const scroll = (props) => {

return (
<div style={{ overflowY: 'scroll', border: '1px solid black', height : '1000px'}}>
{props.children}
</div>    
    );
};

export default scroll;
