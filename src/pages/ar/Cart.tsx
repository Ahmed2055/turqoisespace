import React, { useState } from "react";
import AddressSection from "../../components/AddressSection";
import CartItems from "../../components/CartItems";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SecondaryFooter from "../../components/SecondaryFooter";

function Cart() {
    return (
        <div className="cart">
            <Header />
            <AddressSection address1="الرئيسية" address2="سلة المشتريات" link2="ar/cart" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />

            <CartItems />

            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default Cart;
