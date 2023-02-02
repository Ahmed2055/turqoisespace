import React from "react";
import AddressSection from "../../../components/AddressSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProductsBody from "../../../components/ProductsBody";
import SecondaryFooter from "../../../components/SecondaryFooter";

function PrivateClasses() {
    return (
        <div className="privateClasses">
            <Header />
            <AddressSection address1="الرئيسية" address2="تجارب تركواز الخاصة" link2="ar/productsPages/PrivateClasses" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />

            <div className="privateClasses__body" dir="rtl">
                <ProductsBody secTitle="تجارب تركواز الخاصة" content="privateClasses" />
            </div>

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default PrivateClasses;
