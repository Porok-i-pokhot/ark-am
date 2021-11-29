import React from 'react';
import { Link } from 'react-router-dom';

function SocialNetworks({iconStyle, imageLink}) {
    return(
        <div className="social-container">
            <Link>
                <img alt="instagram" className={iconStyle} src={imageLink}/>
            </Link>
            <Link>
                <img alt="linkedIn" className={iconStyle} src={imageLink}/>
            </Link>
            <Link>
                <img alt="tikTok" className={iconStyle} src={imageLink}/>
            </Link>
        </div>
    )
}

export default SocialNetworks;