import React from "react";

import "./style.css"
import fatou from "./fatou.jpg";
const ProfilePhoto = () => {
 return (
<div>
    
<img src={fatou}  alt="screen" style={{width:400,height:400,borderRadius:400/ 2}}/>
</div>
 );
};
export default ProfilePhoto;