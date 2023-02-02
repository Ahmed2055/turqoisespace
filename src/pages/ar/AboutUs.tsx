import React from "react";
import AddressSection from "../../components/AddressSection";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import aboutBigPic from "../../images/aboutPage/aboutBigPic.jpg";
import BigPic from "../../components/BigPic";
import SecondaryFooter from "../../components/SecondaryFooter";
import Footer from "../../components/Footer";

function AboutUs() {
    return (
        <div className="aboutUs">
            <Header />
            <AddressSection address1="الرئيسية" address2="عن تركواز" link2="ar/aboutUs" address3={undefined} link3={undefined} address4={undefined} link4={undefined} />
            <PageTitle titleName="عن تركواز" />
            <div className="aboutUs__body" dir="rtl">
                <div className="aboutUs__passage">
                    <div className="aboutUs__passageTitle">
                        <FiberManualRecordIcon fontSize="small" />
                        <h4 className="aboutUs__passageTitleName">عن تركواز :</h4>
                    </div>
                    <p className="aboutUs__passageText">
                        "مجتمع تركواز هو مجتمع فني ثقافي يستهدف الفنانين والمهتمين بالفنون بكافة أنواعها من رسم، موسيقى، أدب وغيرها.. ويقدم لهم ورش عمل تعليمية وبرامج ثقافية ولقاءات اجتماعية، وتجارب عميقة وخدمات تسويقية تساعد الفنان على رفع جودة الإتقان المهاري والتعبير الوجداني والدخل المالي بطريقة مبسّطة ومنظّمة. لكي نخرج للساحة الفنية بالمملكة فنانين محترفين وأعمال فنية قوية
                        وفريدة"
                    </p>
                </div>

                <div className="aboutUs__passage">
                    <div className="aboutUs__passageTitle">
                        <FiberManualRecordIcon fontSize="small" />
                        <h4 className="aboutUs__passageTitleName">رؤيتنا :</h4>
                    </div>
                    <p className="aboutUs__passageText">في تركواز نؤمن أن الفن الحقيقي متنفّس، تشافي، وحوار عميق مع الآخر. ويحتاج الكثير من الصدق، التعلم بمنهجية صحيحة، الممارسة المستمرة، حتى يكون أسلوب حياة.</p>
                </div>
            </div>

            <BigPic pic={aboutBigPic} />
            <SecondaryFooter />
            <Footer />
        </div>
    );
}

export default AboutUs;
