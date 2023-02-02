import React, { useState } from "react";
import Header from "../../components/Header";
import BigPic from "../../components/BigPic";
import Footer from "../../components/Footer";
import ProductsSection from "../../components/ProductsSection";
//import VideoAd from '../../components/VideoAd';
import AdvantagesSection from "../../components/AdvantagesSection";
import SecondaryFooter from "../../components/SecondaryFooter";
import HomebigPic from "../../images/homePage/HomebigPic.png";

function HomePage() {
    const [loginActive, setLoginActive] = useState(true);
    return (
        <div>
            <Header />

            <BigPic pic={HomebigPic} />
            <ProductsSection secTitle="أخر المستجدات" content="lastUpdates" />
            <ProductsSection secTitle="الكلاسات الخاصة" content="privateClasses" />
            <ProductsSection secTitle="طلبات اللوحات الخاصة" content="privateOrders" />

            <AdvantagesSection />
            <SecondaryFooter />

            <Footer />
        </div>
    );
}

export default HomePage;
