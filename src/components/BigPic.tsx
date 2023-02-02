import React from "react";



function BigPic({ pic }: {pic: any }) {
    return (
        <div className="bigPic">
            <img src={pic} alt="Big Picture" className="bigPic__image" />
        </div>
    );
}

export default BigPic;
