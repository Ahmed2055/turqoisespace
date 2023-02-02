import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function SecondaryFooter() {
    return (
        <div dir="rtl" className="secondaryFooter">
            <div className="SF__section">
                <h3 className="SF__Title">من نحن</h3>
                <p className="SF__text">مجتمع تركواز هو مجتمع فني ثقافي يستهدف الفنانين والمهتمين بالفنون بكافة أنواعها من رسم، موسيقى، أدب وغيرها.. ويقدم لهم ورش عمل تعليمية وبرامج ثقافية ولقاءات اجتماعية، وتجارب عميقة وخدمات تسويقية</p>
                <div className="SF__contacts">
                    <Link to="/" className="SF__contact">
                        <WhatsAppIcon fontSize="small" />
                        <span className="SF__contactText">واتساب</span>
                    </Link>
                    <Link to="/" className="SF__contact">
                        <SmartphoneIcon fontSize="small"/>
                        <span className="SF__contactText">جوال</span>
                    </Link>
                    <Link to="/" className="SF__contact">
                        <EmailIcon fontSize="small"/>
                        <span className="SF__contactText">ايميل</span>
                    </Link>
                </div>
            </div>
            <div className="SF__section">
                <h3 className="SF__Title"> روابط مهمة</h3>
                <div className="SF__links">
                    <Link to="/" className="SF__link">
                        عن تركواز
                    </Link>
                    <Link to="/" className="SF__link">
                        سياسة الاستبدال والاسترجاع
                    </Link>
                    <Link to="/" className="SF__link">
                        هل الفن علم أم موهبة؟ - مقال بقلم أحمد حداد
                    </Link>
                    <Link to="/" className="SF__link">
                        الشكاوى و الإقتراحات
                    </Link>
                </div>
            </div>
            <div className="SF__section">
                <h3 className="SF__Title">تواصل معنا </h3>
                <div className="SF__contactButtons">
                    <div className="SF__contactButton"> <div className="SF__contactButtonIcon"><InstagramIcon /></div> </div>
                    <div className="SF__contactButton"><div className="SF__contactButtonIcon"><TwitterIcon /></div></div>
                    <div className="SF__contactButton"><div className="SF__contactButtonIcon"><YouTubeIcon /></div></div>
                    <div className="SF__contactButton"><div className="SF__contactButtonIcon"><FacebookIcon /></div></div>

                </div>
            </div>
        </div>
    );
}

export default SecondaryFooter;
