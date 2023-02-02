import React from "react";
import AddressSection from "../../../components/AddressSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProductBody from "../../../components/ProductsBody";
import SecondaryFooter from "../../../components/SecondaryFooter";

function PrivateOrders() {
    return (
        <div className="privateOrders">
            <Header />
            <AddressSection address1="الرئيسية" address2="طلبات اللوحات الخاصة" link2="ar/productsPages/PrivateOrders" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />

            <div className="counsellingServices__body" dir="rtl">
                <ProductBody secTitle="طلبات اللوحات الخاصة" content="privateOrders" />
            </div>

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default PrivateOrders;
