import React from 'react';
import {Link} from "react-router-dom";

function TeamInfo() {
    return(
        <div>
            <h2 className="">our team</h2>
            <ul>
                <li>
                    <Link>Mushfeq &nbsp; -&nbsp;</Link>
                </li>
                <li>
                    <Link>Asif &nbsp; -&nbsp;</Link>
                </li>
                <li>
                    <Link>Salim &nbsp; -&nbsp;</Link>
                </li>
                <li>
                    <Link>Andalib &nbsp; -&nbsp;</Link>
                </li>
                <li>
                    <Link>Mikhail &nbsp; -&nbsp;</Link>
                </li>
                <li>
                    <Link>Daniel &nbsp; -&nbsp;</Link>
                </li>
            </ul>
        </div>
    )
}

export default TeamInfo;