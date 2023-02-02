import React, {useState} from "react";
import myAccount from "../images/homePage/myAccount.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function LoginComponent() {
    const [loginActive, setLoginActive] = useState(true);
    return (
        <>
            {loginActive && (
                <div className="loginComponent">
                    <div className="loginBox">
                        <div className="loginBox__closeDiv">
                            <IconButton aria-label="delete" color="inherit" onClick={()=>setLoginActive(false)}>
                                <CloseIcon color="inherit" />
                            </IconButton>
                        </div>
                        <div className="loginBox__contentDiv">
                            <div className="loginBox__top">
                                <AccountCircleOutlinedIcon color="inherit" fontSize="inherit" />
                                <p className="loginBox__topText">تسجيل الدخول</p>
                            </div>
                            <div className="loginBox__bottom">
                                <div className="loginBox__bottomQuestion">
                                    <div className="loginBox__bottomQuestionSide"></div>
                                    <div className="loginBox__bottomQuestionText">اختر الوسيلة المناسبة</div>
                                    <div className="loginBox__bottomQuestionSide"></div>
                                </div>
                                <div className="loginBox__bottomOptions" dir="rtl">
                                    <button className="loginBox__Option">
                                        <PhoneAndroidIcon fontSize="large" color="inherit" />
                                        <p className="loginBox__OptionText">رسالة نصية</p>
                                    </button>
                                    <button className="loginBox__Option">
                                        <MailOutlineIcon fontSize="large" color="inherit" />
                                        <p className="loginBox__OptionText"> البريد الإلكتروني </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LoginComponent;
