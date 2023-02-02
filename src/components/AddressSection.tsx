import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function AddressSection({ address1, address2, address3, address4, link2, link3, link4 }: { address1: string, address2: any, address3: any, address4: any, link2: any, link3: any, link4: any, }) {
    return (
        <div className="addressSection" dir="rtl">
            <>
                {address2 ? (
                    <Link to={`/`} className="addressSection__address hoverBlack">
                        <div className="addressSection__icon">
                            <HomeIcon />
                        </div>
                        <p className="addressSection__text"> {address1} </p>
                    </Link>
                ) : (
                    <div className="addressSection__address">
                        <div className="addressSection__icon">
                            <HomeIcon />
                        </div>
                        <p className="addressSection__text"> {address1} </p>
                    </div>
                )}
            </>

            {address2 ? (
                <>
                    {address3 ? (
                        <Link to={`/${link2}`} className="addressSection__address hoverBlack">
                            <div className="addressSection__icon">
                                <ChevronLeftIcon />
                            </div>
                            <p className="addressSection__text"> {address2} </p>
                        </Link>
                    ) : (
                        <div className="addressSection__address">
                            <div className="addressSection__icon">
                                <ChevronLeftIcon />
                            </div>
                            <p className="addressSection__text"> {address2} </p>
                        </div>
                    )}
                </>
            ) : (
                <></>
            )}

            {address3 ? (
                <>
                    {address4 ? (
                        <Link to={`/`} className="addressSection__address hoverBlack">
                            <div className="addressSection__icon">
                                <ChevronLeftIcon />
                            </div>
                            <p className="addressSection__text"> {address3} </p>
                        </Link>
                    ) : (
                        <div className="addressSection__address">
                            <div className="addressSection__icon">
                                <ChevronLeftIcon />
                            </div>
                            <p className="addressSection__text"> {address3} </p>
                        </div>
                    )}
                </>
            ) : (
                <></>
            )}

            {address4 ? (
                <div className="addressSection__address">
                    <div className="addressSection__icon">
                        <ChevronLeftIcon />
                    </div>
                    <p className="addressSection__text"> {address4} </p>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default AddressSection;
