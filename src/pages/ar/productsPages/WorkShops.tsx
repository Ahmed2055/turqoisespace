import React from "react";
import AddressSection from "../../../components/AddressSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProductsBody from "../../../components/ProductsBody";
import SecondaryFooter from "../../../components/SecondaryFooter";

function WorkShops() {
    return (
        <div className="workShops">
            <Header />
            <AddressSection address1="الرئيسية" address2="تجارب فنية" link2="ar/productsPages/WorkShops" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />

            <div className="workShops__body" dir="rtl">
                <ProductsBody secTitle="تجارب فنية" content="workShops" />
            </div>

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default WorkShops;
