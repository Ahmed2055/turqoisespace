import React from "react";
import PaletteIcon from '@mui/icons-material/Palette';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CoffeeIcon from '@mui/icons-material/Coffee';

function AdvantagesSection() {
    return (
        <div className="advantagesSection">
            <div className="Advantage">
                <div className="advantageTop">
                    <div className="advantageTop__iconDiv"><CoffeeIcon/></div>
                    <h4 className="advantageTop__title">عن الفن</h4>
                </div>
                <div className="advantageBottom">
                    <p className="advantageBottom__description">الفن هو تجسيد للحقيقة ,الجمال ,والأفكار</p>
                </div>
            </div>
            
            <div className="Advantage">
                <div className="advantageTop">
                    <div className="advantageTop__iconDiv"><VolunteerActivismIcon/></div>
                    <h4 className="advantageTop__title">بيئة صحية وملهمة</h4>
                </div>
                <div className="advantageBottom">
                    <p className="advantageBottom__description">هدفنا خلق بيئة إيجابية وملهمة تساعد الفنان على التطور والإنتاجية</p>
                </div>
            </div>

            <div className="Advantage">
                <div className="advantageTop">
                    <div className="advantageTop__iconDiv"><PaletteIcon/></div>
                    <h4 className="advantageTop__title">اتزان يؤدي إلى دهشة</h4>
                </div>
                <div className="advantageBottom">
                    <p className="advantageBottom__description">الجمع بين إتقان المهارة والجانب الوجداني والمالي في الفن، بطريقة مبسّطة ومنظّمة</p>
                </div>
            </div>
            
        </div>
    );
}

export default AdvantagesSection;
