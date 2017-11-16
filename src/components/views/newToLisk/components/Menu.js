import React, {Component} from 'react';

import support_image from "../img/info.png";

class Menu extends Component {

    render(){
        return (
            <div className="newtolisk--container">
                <div className="newtolisk--info-image">
                    <img src={support_image} alt="support"/>
                </div>
                {/*<div className="support-menu">
                    <div className="content-label-wrap support-wrap">
                        <div className="content-label">SUPPORT</div>
                    </div>
                    <ul>
                        <li><a>New to lisk</a></li>
                    </ul>
                </div>*/}
            </div>

        );
    }
};

export default Menu;
