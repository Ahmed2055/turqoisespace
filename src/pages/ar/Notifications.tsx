import React from "react";
import AddressSection from "../../components/AddressSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SecondaryFooter from "../../components/SecondaryFooter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Notifications() {
    return (
        <div className="notifications">
            <Header />
            <AddressSection address1="الرئيسية" address2="حسابي" link2="ar/profile" address3="الإشعارات" link3="ar/Notifications" address4={undefined} link4={undefined} />

            <div className="notificationsBody" dir="rtl">
                <div className="notificationsBody__top">
                    <NotificationsIcon fontSize="inherit" color="inherit" />
                    <h3 className="notificationsBody__topTitle">الاشعارات</h3>
                </div>
                <div className="notificationsBody__bottom">
                    <div className="notificationsBody__bottomEmpty">
                        <AcUnitIcon fontSize="inherit" color="inherit" />
                        <p className="notificationsBody__bottomEmptyTitle">لا توجد إشعارات</p>
                    </div>
                </div>
            </div>

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default Notifications;
