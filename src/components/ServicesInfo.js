import React from 'react';
import {Link} from "react-router-dom";

function ServicesInfo() {
    return(
        <div>
            <h2>we offer</h2>
            <Link>Web Services (SEO, Full-Stack Developer, Content Writer)</Link>
            <Link>Custom 3D Design (SolidWorks & AutoCAD)</Link>
            <Link>Engineered 3D Prints (Fused Deposition Modeling with PLA)</Link>
        </div>
    )
}

export default ServicesInfo;