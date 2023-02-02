import React from "react";
import AddressSection from "../../../components/AddressSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProductsBody from "../../../components/ProductsBody";
import SecondaryFooter from "../../../components/SecondaryFooter";

function Services() {
    return (
        <div className="services">
            <Header />
            <AddressSection address1="الرئيسية" address2="الخدمات التسويقية (للفنانين)" link2="ar/productsPages/Services" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />

            <div className="services__body" dir="rtl">
                <ProductsBody secTitle="الخدمات التسويقية" content="services" />
            </div>

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default Services;
