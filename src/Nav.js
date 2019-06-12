import React from "react";

class Nav extends React.Component{

    render(){
    return(
        <div>
            <h1>Nom</h1>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Podcast</a></li>
            </ul>
        </div>
    );
    }
}

export default Nav;