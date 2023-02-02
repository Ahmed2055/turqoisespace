import React, { useState } from "react";
import siteLogo from "../images/header/siteLogo.png";
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from '@mui/icons-material/Campaign';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MobileMenu from './MobileMenu';
import LoginComponent from "./LoginComponent";
import Spacer from "./Spacer";


function Header() {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [activeBox, setactiveBox] = useState(0);
    const [searchText, setsearchText] = useState('')
    const [loginBoxActive, setloginBoxActive] = useState(false);

    const handleSearchButton = () =>{
        if(activeBox === 0){
            setactiveBox(1);
        }
        else if(activeBox === 2){
            setactiveBox(1);
        }
        else{
            setactiveBox(0);
        }
    }

    const handleNotificationsButton = () =>{
        if(activeBox === 0){
            setactiveBox(2);
        }
        else if(activeBox === 1){
            setactiveBox(2);
        }
        else{
            setactiveBox(0);
        }
    }


    return (
        <div >
            <Spacer height={120} />
        <div className="header">
            {loginBoxActive ? <LoginComponent /> : <></> }
            
            <div className="headerIcons">
                <Link to="/ar/cart" className="headerIcon__div">
                    <ShoppingCartIcon fontSize="inherit" />
                    <div className="headerIcon__numberDiv">
                        <span className="headerIcon__number">0</span>
                    </div>
                </Link>

                <div className="headerIcon__div">
                    <button className="headerIcon__divBtn"  onClick={()=>handleSearchButton()}>
                        <SearchIcon fontSize="inherit" />
                    </button>
                    {activeBox===1? <input className="headerIcon__searchBox" placeholder="أدخل كلمة البحث" type="text" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/> : <></>} 
                </div>

                <div className="headerIcon__div">
                    <button className="headerIcon__divBtn"  onClick={()=>handleNotificationsButton()}>
                        <NotificationsNoneIcon fontSize="inherit"  />
                    </button>
                    <div className="headerIcon__numberDiv">
                        <span className="headerIcon__number">0</span>
                    </div>
                    {activeBox===2? 
                    <div className="headerIcon__notificationsBox" dir="rtl">
                        <div className="headerIcon__notificationsBoxTop">
                            <div className="headerIcon__notificationsBoxTopEmpty">
                                <CampaignIcon fontSize="inherit" color="inherit" />
                                <p className="headerIcon__notificationsBoxTopText">لا توجد إشعارات</p>
                            </div>               
                        </div>
                        <Link to="/ar/Notifications" className="headerIcon__notificationsBoxBottom">
                            <KeyboardArrowRightIcon fontSize="inherit" color="inherit" />
                            <p className="headerIcon__notificationsBoxBottomText"> جميع الإشعارات </p>     
                        </Link>
                    </div>
                    : <></>} 
                </div>

                <div className="headerIcon__div">
                    <button className="headerIcon__divBtn"  onClick={()=>setloginBoxActive(!loginBoxActive)} >
                        <AccountCircleOutlinedIcon fontSize="inherit" />
                    </button>
                </div>
            </div>

            <div className="headerLinks">
                <Link to="/ar/productsPages/PrivateOrders" className="headerLink">
                    <span className="headerLink__text">طلبات اللوحات الخاصة</span>
                </Link>
                <Link to="/ar/productsPages/CounsellingServices" className="headerLink">
                    <span className="headerLink__text">خدمة الإستشارات</span>
                </Link>
                <Link to="/ar/productsPages/Services" className="headerLink">
                    <span className="headerLink__text">خدماتنا للفنانين</span>
                </Link>
                <Link to="/ar/productsPages/PrivateClasses" className="headerLink">
                    <span className="headerLink__text">تجارب تركواز الخاصة</span>
                </Link>
                <Link to="/ar/productsPages/WorkShops" className="headerLink">
                    <span className="headerLink__text">تجارب فنية </span>
                </Link>
                <Link to="/ar/aboutUs" className="headerLink">
                    <span className="headerLink__text"> عن تركواز </span>
                </Link>
            </div>

            <Link to="/" className="header_logoDiv">
                <img src={siteLogo} alt="Company Logo" className="header__logo" />
            </Link>

            <div className="headerMenu__buttonDiv">
                {mobileMenuActive ? (
                    <MobileMenu mobileMenuActive={mobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
                ) : (
                    <IconButton className="headerMenu__button" onClick={(e) => setMobileMenuActive(!mobileMenuActive)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                )}
            </div>
        </div>
        </div>
    );
}

export default Header;
