import React from "react";
import AddressSection from "../../../components/AddressSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SecondaryFooter from "../../../components/SecondaryFooter";

function CounsellingServices() {
    return (
        <div className="counsellingServices">
            <Header />
            <AddressSection address1="الرئيسية" address2="خدمة الاستشارات" link2="ar/productsPages/CounsellingServices" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />

            <div className="counsellingServices__body" dir="rtl"></div>

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default CounsellingServices;
