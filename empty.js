import React from 'react';
import {Link} from 'react-router-dom'
function Empty(){
    return(
        <div>
        <h1>Empty page</h1>
        <Link to="/empty">"Empty Page"</Link>
        </div>
    )
}
export default Empty;